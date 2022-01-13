import { HttpException } from '@nestjs/common'
import { on } from 'events'
import { BaseError, ServerError, ValidationError } from './errors'

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

      try {
        if (!isOnly && typeof emitValidator === 'function') {
          errorTree[objKey] = emitValidator(objValue, objKey)
        }
        if (typeof emitValidator === 'function') {
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
          errorCode: 'excessiveKey',
          value: errorTree.value ? errorTree.value.concat([objKey]) : [objKey],
          message: 'excessiveKey',
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

// export default class RequestDataValidator {
//   private validators: Assertion | [Assertion, ...unknown[]] [] = []
//   private readonly errors = new Map()
//   constructor(private readonly data: Record<string, unknown>, readonly isThrowFirst = false) {}

//   public push(validators: RequestDataValidator['validators']): RequestDataValidator {
//     this.validators = this.validators.concat(validators)
//     return this
//   }

//   public pushError(error: CollectableError): RequestDataValidator {
//     if (this.isThrowFirst) {
//       throw new HttpException(
//         {
//           ...error,
//           message: error.message,
//           errorCode: 'EINVALID',
//           timestamp: new Date().toISOString(),
//         },
//         400,
//       )
//     }

//     this.errors.set(error.key, { ...error, message: error.message })

//     return this
//   }

//   public validate(): RequestDataValidator {
//     for (let i = 0; i < this.validators.length; i++) {
//       const validator = this.validators.pop()

//       try {
//         validator(this.data)
//       } catch (error) {
//         if (error instanceof CollectableError) {
//           this.pushError(error)
//         } else {
//           throw Error('Unexpected error while validating a request data ')
//         }
//       } finally {
//         const isLast = this.validators.length === 0
//         const hasErrors = this.errors.size !== 0

//         if (isLast && hasErrors) {
//           throw new HttpException(
//             {
//               errors: Object.fromEntries(this.errors),
//               message: 'Validation error',
//               errorCode: 'EINVALID',
//               timestamp: new Date().toISOString(),
//             },
//             400,
//           )
//         }
//       }
//     }

//     return this
//   }
// }
