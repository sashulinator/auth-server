import { ServerError, ValidationError } from './errors'

type Assertion = (value: any) => void

type ComparingAssertion = (value: any, comparingValue: any) => void

type AssertionItem = Assertion | [ComparingAssertion, any, string?]

type TreeSchema = { [fieldName: string]: TreeSchema | EmitAssertValidation | EmitTreeValidation }

type EmitAssertValidation = (value: any, key: string) => void

type EmitTreeValidation = (obj: Record<string, any>, key: string, isThrowError?: boolean) => void

//

export function validate(assertionItems: AssertionItem[]): EmitAssertValidation {
  return function emitAssertValidation(value: any, key: string, isThrowError = true): ValidationError | void {
    for (let index = 0; index < assertionItems.length; index++) {
      const assertionItem = assertionItems[index]

      let key2: string
      let value2: any
      let assertion: Assertion | ComparingAssertion

      try {
        if (Array.isArray(assertionItem)) {
          ;[assertion, value2, key2] = assertionItem
          assertion?.(value, value2)
        } else {
          assertion = assertionItem
          ;(assertion as Assertion)(value)
        }
      } catch (error) {
        if (error instanceof Error) {
          const validationError = new ValidationError({
            key,
            value,
            key2,
            value2: value2?.toString(),
            errorCode: assertion?.name,
            message: error.message,
          })

          if (isThrowError) {
            throw validationError
          } else {
            return validationError
          }
        }
      }
    }
  }
}

export function only(schema: TreeSchema): EmitTreeValidation {
  return function emitTreeValidation(obj: Record<string, any>, key: string, isThrowError = true) {
    let { unusedObjectKeys, errorTree } = compare(schema, obj)

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

export function or(
  schema1: TreeSchema | EmitAssertValidation | EmitTreeValidation,
  schema2: TreeSchema | EmitAssertValidation | EmitTreeValidation,
) {
  return function emitOr(obj: Record<string, any>, key: string, isThrowError = true) {
    const schemaErrors1 = compareSchemaOrEmitValidation(schema1, obj, key)
    const schemaErrors2 = compareSchemaOrEmitValidation(schema2, obj, key)

    if (schemaErrors1 && schemaErrors2) {
      const errors = { ...schemaErrors2, ...schemaErrors1 }

      if (isThrowError) {
        throw new ServerError({
          errorCode: 'validation',
          message: 'Validation error',
          errors,
          status: 401,
        })
      }

      return errors
    }

    return undefined
  }
}

export function and(
  schema1: TreeSchema | EmitAssertValidation | EmitTreeValidation,
  schema2: TreeSchema | EmitAssertValidation | EmitTreeValidation,
) {
  return function emitOr(obj: Record<string, any>, key: string, isThrowError = true) {
    const schemaErrors1 = compareSchemaOrEmitValidation(schema1, obj, key)
    const schemaErrors2 = compareSchemaOrEmitValidation(schema2, obj, key)

    if (schemaErrors1 || schemaErrors2) {
      const errors = { ...schemaErrors2, ...schemaErrors1 }

      if (isThrowError) {
        throw new ServerError({
          errorCode: 'validation',
          message: 'Validation error',
          errors,
          status: 401,
        })
      }

      return errors
    }

    return undefined
  }
}

function compareSchemaOrEmitValidation(
  schemaOrEmitter: TreeSchema | EmitAssertValidation | EmitTreeValidation,
  obj: any,
  key: string,
): Record<string, ValidationError> | ValidationError | void {
  if (typeof schemaOrEmitter === 'function') {
    return schemaOrEmitter(obj, key, false)
  } else {
    const { errorTree } = compare(schemaOrEmitter, obj)
    return errorTree
  }
}

export function array(schemaOrEmitter: TreeSchema | EmitAssertValidation | EmitTreeValidation) {
  return function emitTreeValidation(arr: any[], key: string, isThrowError = true) {
    let arrayErrors = {}

    if (Array.isArray(arr) || arr === undefined) {
      if (typeof schemaOrEmitter === 'function') {
        for (let index = 0; index < arr?.length; index++) {
          const item = arr[index]
          const key = index.toString()

          arrayErrors[key] = compareSchemaOrEmitValidation(schemaOrEmitter, item, key)
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

export function required(schema: TreeSchema): EmitTreeValidation {
  return function emitTreeValidation(obj: Record<string, any>, key: string, isThrowError = true) {
    let { unusedSchemaKeys, errorTree } = compare(schema, obj)

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

export function requiredOnly(schema: TreeSchema): EmitTreeValidation {
  return function emitTreeValidation(obj: Record<string, any>, key: string, isThrowError = true) {
    let { unusedSchemaKeys, unusedObjectKeys, errorTree } = compare(schema, obj)

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

function compare(
  schema: TreeSchema,
  obj: Record<string, any>,
): {
  errorTree?: Record<string, ValidationError> | ValidationError
  unusedObjectKeys: string[]
  unusedSchemaKeys: string[]
} {
  const schemaEntries = Object.entries(schema)
  let errorTree: Record<string, any> = {}
  let unusedObjectKeys = Object.keys(obj || {})
  let unusedSchemaKeys = []

  for (let index = 0; index < schemaEntries.length; index++) {
    const [objKey, emitValidator] = schemaEntries[index]
    const objValue = obj?.[objKey]

    unusedObjectKeys = unusedObjectKeys.filter((key) => key !== objKey)

    if (objValue === undefined) {
      unusedSchemaKeys.push(objKey)
    }

    if (typeof emitValidator === 'function') {
      errorTree[objKey] = emitValidator(objValue, objKey, false)
    }
  }

  return {
    unusedObjectKeys,
    unusedSchemaKeys,
    errorTree: !!Object.values(errorTree).find(Boolean) ? errorTree : undefined,
  }
}
