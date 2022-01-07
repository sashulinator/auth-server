import { BadRequestException } from '@nestjs/common'
import { validateNotMoreThan, validateStringifiedNumber } from '../validators'
import { validateString } from '../validators'

interface FindManySettings {
  maxTake: number
}

interface FindManyParams {
  take: string
  skip: string
}

export function validateFindManyParams(
  { take, skip }: Partial<FindManyParams>,
  { maxTake = 100 }: FindManySettings,
): void {
  try {
    take !== undefined && validateStringifiedNumber(take, 'take')
    take !== undefined && validateNotMoreThan(take, maxTake, 'take')
    skip !== undefined && validateStringifiedNumber(skip, 'skip')
  } catch (e) {
    throw new BadRequestException(e)
  }
}
