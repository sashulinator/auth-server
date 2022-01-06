import { User } from '@prisma/client'
import { throwCollectedErrors } from '../utils/throw-collected-errors'
import { validateByPattern, validateNotMoreThan, validateNotUndefined } from '../validators'

export default function validateUserInput(user: Partial<User>): void {
  throwCollectedErrors([
    (): void => {
      validateNotUndefined(user.name, 'name')
      validateByPattern(user.name, /^(\w*)$/, 'name', 'name')
      validateNotMoreThan(user.name.length, 20, 'name')
    },
    (): void => {
      validateNotUndefined(user.email, 'email')
      validateByPattern(user.email, /@.*?\./, 'email', 'email')
      validateNotMoreThan(user.email.length, 200, 'email')
    },
  ])
}
