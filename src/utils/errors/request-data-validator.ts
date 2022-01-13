import { ServerError, ValidationError } from './errors'

type Assertion = (value: any) => void

type ComparingAssertion = (value: any, comparingValue: any) => void

type AssertionItem = Assertion | [ComparingAssertion, any, string?]

type TreeSchema = { [fieldName: string]: TreeSchema | EmitAssertValidation | EmitTreeValidation }

type EmitAssertValidation = (value: any, key: string) => void

type EmitTreeValidation = (obj: Record<string, any>, key: string, isThrowError?: boolean) => void

export function validate(assertionItems: AssertionItem[]): EmitAssertValidation {
  return function emitAssertValidation(value: any, key: string) {
    assertionItems.forEach((assertionItem) => {
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
          throw new ValidationError({
            key,
            value,
            key2,
            value2: value2?.toString(),
            errorCode: assertion?.name,
            message: error.message,
          })
        }
      }
    })
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

function compare(schema: TreeSchema, obj: Record<string, any>) {
  const schemaEntries = Object.entries(schema)
  let errorTree: Record<string, any> = {}
  let unusedObjectKeys = Object.keys(obj)
  let unusedSchemaKeys = []

  for (let index = 0; index < schemaEntries.length; index++) {
    const [objKey, emitValidator] = schemaEntries[index]
    const objValue = obj[objKey]

    unusedObjectKeys = unusedObjectKeys.filter((key) => key !== objKey)

    if (objValue === undefined) {
      unusedSchemaKeys.push(objKey)
    }

    const isTreeValidation = emitValidator?.name === only({}).name

    try {
      if (objKey in obj && !isTreeValidation && typeof emitValidator === 'function') {
        errorTree[objKey] = emitValidator(objValue, objKey)
      }
      if (objKey in obj && typeof emitValidator === 'function') {
        errorTree[objKey] = emitValidator(objValue, objKey, false)
      }
    } catch (error) {
      errorTree[objKey] = error
    }
  }

  return {
    unusedObjectKeys,
    unusedSchemaKeys,
    errorTree,
  }
}
