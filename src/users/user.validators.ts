import { User } from '@prisma/client'
import { validateByPattern, validateNotMoreThan, validateNotUndefined } from '../utils/errors/validators'

export default function validateUserInput(user: Partial<User>): void {
  validateNotUndefined(user.name, 'name')
  validateByPattern(user.name, /^(\w*)$/, 'name', 'name')
  validateNotMoreThan(user.name.length, 20, 'name')

  validateNotUndefined(user.email, 'email')
  validateByPattern(user.email, /@.*?\./, 'email', 'email')
  validateNotMoreThan(user.email.length, 200, 'email')
}
