import { HttpException } from '@nestjs/common'
import { CollectableError } from './errors'

export default class RequestDataValidator {
  private validators: ((data: Record<string, unknown>) => void)[] = []
  private readonly errors = new Map()
  constructor(private readonly data: Record<string, unknown>, readonly isThrowFirst = false) {}

  public push(validators: RequestDataValidator['validators']): RequestDataValidator {
    this.validators = this.validators.concat(validators)
    return this
  }

  public pushError(error: CollectableError): RequestDataValidator {
    if (this.isThrowFirst) {
      throw new HttpException(
        {
          ...error,
          message: error.message,
          errorCode: 'EINVALID',
          timestamp: new Date().toISOString(),
        },
        400,
      )
    }

    this.errors.set(error.key, { ...error, message: error.message })

    return this
  }

  public validate(): RequestDataValidator {
    for (let i = 0; i < this.validators.length; i++) {
      const validator = this.validators.pop()

      try {
        validator(this.data)
      } catch (error) {
        if (error instanceof CollectableError) {
          this.pushError(error)
        } else {
          throw Error('Unexpected error while validating a request data ')
        }
      } finally {
        const isLast = this.validators.length === 0
        const hasErrors = this.errors.size !== 0

        if (isLast && hasErrors) {
          throw new HttpException(
            {
              errors: Object.fromEntries(this.errors),
              message: 'Validation error',
              errorCode: 'EINVALID',
              timestamp: new Date().toISOString(),
            },
            400,
          )
        }
      }
    }

    return this
  }
}
