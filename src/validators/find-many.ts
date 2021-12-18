import { throwCollectedErrors } from '../utils/throw-collected-errors'
import { validateNotMoreThan, validateNumber, validateStringifiedNumber } from '../validators'

interface FindManySettings {
  maxTake: number
}

interface FindManyParams {
  take: string
  skip: string
}

export default function validateFindManyParams(
  { take, skip }: Partial<FindManyParams>,
  { maxTake = 100 }: FindManySettings,
): void {
  throwCollectedErrors([
    (): void => take !== undefined && validateStringifiedNumber(take, 'take'),
    (): void => take !== undefined && validateNotMoreThan(take, maxTake, 'take'),
    (): void => skip !== undefined && validateStringifiedNumber(skip, 'skip'),
  ])
}
