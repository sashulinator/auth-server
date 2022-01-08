import { User } from '@prisma/client'
import { validateByPattern, validateNotMoreThan, validateNotUndefined } from '../utils/errors/validators'

export default function validateUserInput(user: Partial<User>): void {
  // TODO minLength
  validateNotUndefined(user.name, 'name')
  validateByPattern(user.name, /^(\w*)$/, 'name', 'name')
  validateNotMoreThan(user.name.length, 70, 'name')

  validateNotUndefined(user.username, 'username')
  validateByPattern(user.username, /^(\w*)$/, 'username', 'username')
  validateNotMoreThan(user.username.length, 20, 'username')

  validateNotUndefined(user.email, 'email')
  validateByPattern(user.email, /@.*?\./, 'email', 'email')
  validateNotMoreThan(user.email.length, 200, 'email')
}
