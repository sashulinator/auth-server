import { ValidationError } from './errors'
import { Assertion, AssertionItem, ComparingAssertion, EmitAssertValidation } from './types'

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
