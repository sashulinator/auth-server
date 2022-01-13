import { ServerError, ValidationError } from './errors'

type Assertion = (value: any) => void

type ComparingAssertion = (value: any, comparingValue: any) => void

type AssertionItem = Assertion | [ComparingAssertion, any, string?]

type EmitValidation = (value: any, key: string) => void

export function validate(assertionItems: AssertionItem[]): EmitValidation {
  return function emitValidation(value: any, key: string) {
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

type OnlySchema = { [fieldName: string]: EmitValidation | OnlySchema | ((schema: OnlySchema, name: string) => void) }

export function only(schema: OnlySchema) {
  return function emitOnlyValidation(obj: Record<string, any>, key: string, isThrowError = true) {
    // const schemaEntries = Object.entries(schema)
    const objEntries = Object.entries(obj)
    let errorTree: Record<string, any> = {}

    for (let index = 0; index < objEntries.length; index++) {
      const [objKey, objValue] = objEntries[index]
      const emitValidator = schema[objKey]

      const isOnly = emitValidator?.name === emitOnlyValidation?.name
      const isRequired = emitValidator?.name === required({})?.name
      const isRequiredOnly = emitValidator?.name === requiredOnly({}).name

      try {
        if (objKey in obj && !isOnly && !isRequired && !isRequiredOnly && typeof emitValidator === 'function') {
          errorTree[objKey] = emitValidator(objValue, objKey)
        }
        if (objKey in obj && typeof emitValidator === 'function') {
          errorTree[objKey] = (emitValidator as typeof emitOnlyValidation)(objValue, objKey, false)
        }
      } catch (error) {
        if (!isOnly) {
          errorTree[objKey] = error
        }
      }

      if (emitValidator === undefined) {
        const excessiveKeyError = new ValidationError({
          key,
          value: errorTree.value ? errorTree.value.concat([objKey]) : [objKey],
          errorCode: 'excessiveKey',
          message: 'Excessive Key',
        })

        errorTree = { ...excessiveKeyError, ...errorTree }
      }
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

export function required(schema: OnlySchema) {
  return function emitRequiredValidation(obj: Record<string, any>, key: string, isThrowError = true) {
    // const schemaEntries = Object.entries(schema)
    const schemaEntries = Object.entries(schema)
    let errorTree: Record<string, any> = {}

    for (let index = 0; index < schemaEntries.length; index++) {
      const [objKey, emitValidator] = schemaEntries[index]
      const objValue = obj[objKey]

      if (objValue === undefined) {
        const excessiveKeyError = new ValidationError({
          key,
          value: errorTree.value ? errorTree.value.concat([objKey]) : [objKey],
          errorCode: 'requiredKey',
          message: 'Required Key',
        })

        errorTree = { ...excessiveKeyError, ...errorTree }
      }

      const isOnly = emitValidator?.name === only({}).name
      const isRequired = emitValidator?.name === emitRequiredValidation?.name
      const isRequiredOnly = emitValidator?.name === requiredOnly({}).name

      try {
        if (objKey in obj && !isRequired && !isOnly && !isRequiredOnly && typeof emitValidator === 'function') {
          errorTree[objKey] = emitValidator(objValue, objKey)
        }
        if (objKey in obj && typeof emitValidator === 'function') {
          errorTree[objKey] = (emitValidator as typeof emitRequiredValidation)(objValue, objKey, false)
        }
      } catch (error) {
        if (!isRequired) {
          errorTree[objKey] = error
        }
      }
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

export function requiredOnly(schema: OnlySchema) {
  return function emitRequiredOnlyValidation(obj: Record<string, any>, key: string, isThrowError = true) {
    // const schemaEntries = Object.entries(schema)
    const schemaEntries = Object.entries(schema)
    let excessiveObjectKeys = Object.keys(obj)
    let errorTree: Record<string, any> = {}

    for (let index = 0; index < schemaEntries.length; index++) {
      const [objKey, emitValidator] = schemaEntries[index]
      const objValue = obj[objKey]
      excessiveObjectKeys = excessiveObjectKeys.filter((key) => key !== objKey)
      // нужна проверка на excessive
      //
      if (objValue === undefined) {
        const excessiveKeyError = new ValidationError({
          key,
          value: errorTree.value ? errorTree.value.concat([objKey]) : [objKey],
          errorCode: 'requiredKey',
          message: 'Required Key',
        })

        errorTree = { ...excessiveKeyError, ...errorTree }
      }

      const isOnly = emitValidator?.name === only({}).name
      const isRequired = emitValidator?.name === required({}).name
      const isRequiredOnly = emitValidator?.name === emitRequiredOnlyValidation?.name

      try {
        if (objKey in obj && !isRequired && !isOnly && !isRequiredOnly && typeof emitValidator === 'function') {
          errorTree[objKey] = emitValidator(objValue, objKey)
        }
        if (objKey in obj && typeof emitValidator === 'function') {
          errorTree[objKey] = (emitValidator as typeof emitRequiredOnlyValidation)(objValue, objKey, false)
        }
      } catch (error) {
        if (!isRequired) {
          errorTree[objKey] = error
        }
      }

      const isLast = index === schemaEntries.length - 1

      if (isLast && excessiveObjectKeys.length) {
        const excessiveKeyError = new ValidationError({
          key,
          value: excessiveObjectKeys,
          errorCode: 'excessiveKey',
          message: 'Excessive Key',
        })

        errorTree = { ...excessiveKeyError, ...errorTree }
      }
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
