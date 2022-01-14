import { ValidationError } from './errors'
import { AssertionItem, EmitAssertValidation } from './types'

export function validate(assertionItems: AssertionItem[]): EmitAssertValidation {
  return function emitAssertValidation(value: any, key: string, isThrowError = true): ValidationError | undefined {
    for (let index = 0; index < assertionItems.length; index++) {
      const assertionItem = assertionItems[index]
      const isArray = Array.isArray(assertionItem)
      const assertion = isArray ? assertionItem[0] : assertionItem
      const value2 = isArray ? assertionItem[1] : undefined
      const key2 = isArray ? assertionItem[2] : undefined

      try {
        assertion?.(value, value2)
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
          }

          return validationError
        }
      }
    }

    return undefined
  }
}
