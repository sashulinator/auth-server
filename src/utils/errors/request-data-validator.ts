import { process, processOrEmit, ProcessResult } from './process'
import { ServerError, ValidationError } from './errors'
import { EmitTreeValidation, ErrorTree, Schema, Structure } from './types'

type StructureValidatorCbParams = ProcessResult & {
  structure: Structure
  schema: Schema
  isThrownError: boolean
  key: string
}

export function createStructureValidator(cb: (processResult: StructureValidatorCbParams) => ErrorTree) {
  return (schema: Schema) => {
    return (structure: Structure, key: string, isThrownError: boolean) => {
      return cb({ ...process(schema, structure), structure, schema, isThrownError, key })
    }
  }
}

export function only(schema: Schema): EmitTreeValidation {
  return function emitTreeValidation(obj: Record<string, any>, key: string, isThrowError = true) {
    let { unusedObjectKeys, errorTree } = process(schema, obj)

    if (unusedObjectKeys.length) {
      const excessiveKeysError = new ValidationError({
        key,
        value: unusedObjectKeys,
        errorCode: 'excessiveKeys',
        message: 'Excessive Keys',
      })

      errorTree = { ...excessiveKeysError, ...errorTree }
    }

    if (Object.keys(errorTree).length > 0 && isThrowError) {
      throw new ServerError({
        errorCode: 'validation',
        message: 'Validation error',
        errors: errorTree,
        status: 401,
      })
    }

    return errorTree
  }
}

export function array(schema: Schema) {
  return function emitTreeValidation(arr: any[], key: string, isThrowError = true) {
    let arrayErrors = {}

    if (Array.isArray(arr) || arr === undefined) {
      if (typeof schema === 'function') {
        for (let index = 0; index < arr?.length; index++) {
          const item = arr[index]
          const key = index.toString()

          arrayErrors[key] = processOrEmit(schema, item, key)
        }
      }
    } else {
      arrayErrors = new ValidationError({
        key,
        value: (arr as any)?.toString(),
        errorCode: 'isNotArray',
        message: 'Is not array',
      })
    }

    if (Object.keys(arrayErrors).length > 0 && isThrowError) {
      throw new ServerError({
        errorCode: 'validation',
        message: 'Validation error',
        errors: arrayErrors,
        status: 401,
      })
    }

    return arrayErrors
  }
}

export function required(schema: Schema): EmitTreeValidation {
  return function emitTreeValidation(obj: Record<string, any>, key: string, isThrowError = true) {
    let { unusedSchemaKeys, errorTree } = process(schema, obj)

    if (unusedSchemaKeys.length) {
      const requiredKeysError = new ValidationError({
        key,
        value: unusedSchemaKeys,
        errorCode: 'requiredKey',
        message: 'Required Key',
      })

      errorTree = { ...requiredKeysError, ...errorTree }
    }

    if (Object.keys(errorTree).length > 0 && isThrowError) {
      throw new ServerError({
        errorCode: 'validation',
        message: 'Validation error',
        errors: errorTree,
        status: 401,
      })
    }

    return errorTree
  }
}

export function requiredOnly(schema: Schema): EmitTreeValidation {
  return function emitTreeValidation(obj: Record<string, any>, key: string, isThrowError = true) {
    let { unusedSchemaKeys, unusedObjectKeys, errorTree } = process(schema, obj)

    if (unusedObjectKeys.length) {
      const excessiveKeysError = new ValidationError({
        key,
        value: unusedObjectKeys,
        errorCode: 'excessiveKeys',
        message: 'Excessive Keys',
      })

      errorTree = { ...excessiveKeysError, ...errorTree }
    }

    if (unusedSchemaKeys.length) {
      const requiredKeysError = new ValidationError({
        key,
        value: unusedSchemaKeys,
        errorCode: 'requiredKey',
        message: 'Required Key',
      })

      errorTree = { ...requiredKeysError, ...errorTree }
    }

    if (Object.keys(errorTree).length > 0 && isThrowError) {
      throw new ServerError({
        errorCode: 'validation',
        message: 'Validation error',
        errors: errorTree,
        status: 401,
      })
    }

    return errorTree
  }
}
