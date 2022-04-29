import {
  _undefined,
  and,
  buildErrorTree,
  matchPattern,
  notEmptyString,
  only,
  or,
  string,
  withValue,
  wrap,
} from '@savchenko91/schema-validator'

import { CreateUser, UpdateUser } from './types'

export const bindedWrap = wrap.bind({ handleError: buildErrorTree }) as typeof wrap

export const createUserValidator = bindedWrap(
  only<CreateUser>({
    username: and(string, withValue(/^(\w*)$/, matchPattern)),
    password: and(
      string,
      notEmptyString,
      withValue(/[A-Z]/, matchPattern),
      withValue(/[a-z]/, matchPattern),
      withValue(/[0-9]/, matchPattern),
    ),
    email: and(string, withValue(/@.*\.*./, matchPattern)),
    fullname: or(string, _undefined),
  }),
)

export const updateUserValidator = bindedWrap(
  only<UpdateUser>({
    id: string,
    ...createUserValidator,
  }),
)
