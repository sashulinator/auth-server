import { HttpException } from '@nestjs/common'
import { ValidationError } from 'src/validators'

// TODO: могут быть одинаковые ошибки
export function throwCollectedErrors(validators: (() => void)[]): void {
  const errors = new Set()

  for (let i = 0; i < validators.length; i++) {
    const validator = validators[i]

    try {
      validator()
    } catch (error) {
      if (error instanceof ValidationError) {
        errors.add({ ...error, message: error.message })
      }
    } finally {
      const isLast = i === validators.length - 1
      const hasErrors = errors.size !== 0

      if (isLast && hasErrors) {
        throw new HttpException({ errors: [...errors], message: 'ValidationError', errcode: 'EINVALID' }, 401)
      }
    }
  }
}
