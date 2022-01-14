import { process, processOrEmit, ProcessResult } from './process'
import { ValidationError } from './errors'
import { EmitTreeValidation, ErrorTree, Schema, Structure } from './types'

type StructureValidatorCbParams = ProcessResult & {
  structure: Structure
  schema: Schema
  isThrowError: boolean
  key: string
}

export function createStructureValidator(cb: (processResult: StructureValidatorCbParams) => ErrorTree) {
  return (schema: Schema): EmitTreeValidation => {
    return (structure, key, isThrowError) => {
      return cb({ ...processOrEmit(schema, structure, key), structure, schema, isThrowError, key })
    }
  }
}

export const only = createStructureValidator(({ errorTree, unusedObjectKeys, key }) => {
  if (unusedObjectKeys.length) {
    const excessiveKeysError = new ValidationError({
      key,
      value: unusedObjectKeys,
      errorCode: 'excessiveKeys',
      message: 'Excessive Keys',
    })

    errorTree = { ...excessiveKeysError, ...errorTree }
  }

  return errorTree
})

export const required = createStructureValidator(({ errorTree, unusedSchemaKeys, key }) => {
  if (unusedSchemaKeys.length) {
    const requiredKeysError = new ValidationError({
      key,
      value: unusedSchemaKeys,
      errorCode: 'requiredKey',
      message: 'Required Key',
    })

    errorTree = { ...requiredKeysError, ...errorTree }
  }

  return errorTree
})

export const requiredOnly = (schema: Schema): EmitTreeValidation => only(required(schema))
