import { BadRequestException } from '@nestjs/common'
import {
  validateNotMoreThan,
  validateNotUndefined,
  validateNumber,
  validateStringifiedNumber,
} from '../utils/errors/validators'

interface FindManySettings {
  maxTake: number
}

interface FindManyParams {
  take: string
  skip: string
}

export function validateFindManyParams({ maxTake = 100 }: FindManySettings) {
  return ({ take, skip }: Partial<FindManyParams>) => {
    take !== undefined && validateStringifiedNumber(take, 'take')
    take !== undefined && validateNotMoreThan(take, maxTake, 'take')
    skip !== undefined && validateStringifiedNumber(skip, 'skip')
  }
}

export function validateId(data: Record<string, unknown>) {
  validateNotUndefined(data.id, 'id')
  validateNumber(data.id, 'id')
}
