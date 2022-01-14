import { ServerError } from './errors'
import { processOrEmit } from './process'
import { EmitAssertValidation, EmitTreeValidation, Schema } from './types'

export function or(
  schema1: Schema | EmitAssertValidation | EmitTreeValidation,
  schema2: Schema | EmitAssertValidation | EmitTreeValidation,
) {
  return function emitOr(obj: Record<string, any>, key: string, isThrowError = true) {
    const schemaErrors1 = processOrEmit(schema1, obj, key)
    const schemaErrors2 = processOrEmit(schema2, obj, key)

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
  schema1: Schema | EmitAssertValidation | EmitTreeValidation,
  schema2: Schema | EmitAssertValidation | EmitTreeValidation,
) {
  return function emitOr(obj: Record<string, any>, key: string, isThrowError = true) {
    const schemaErrors1 = processOrEmit(schema1, obj, key)
    const schemaErrors2 = processOrEmit(schema2, obj, key)

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
