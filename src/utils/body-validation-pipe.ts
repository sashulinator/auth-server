import { PipeTransform, Injectable } from '@nestjs/common'
import { ErrorCollector } from '@savchenko91/schema-validator'
import { ServerError } from './errors'

@Injectable()
export class BodyValidationPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(private validator: ErrorCollector<any>) {}

  async transform(value: unknown): Promise<unknown> {
    const errorCollection = await this.validator(value)

    if (errorCollection) {
      throw new ServerError({
        message: 'validation error',
        code: 'validation',
        errors: errorCollection,
        status: 401,
      })
    }

    return value
  }
}
