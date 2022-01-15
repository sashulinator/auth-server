import { ServerError } from 'src/utils/errors'
import { createStructureValidator } from '@savchenko91/schema-validator/dist/structure-validators'

export const throwError = createStructureValidator(({ errorTree }) => {
  if (errorTree) {
    throw new ServerError({
      message: 'Validation error',
      code: 'validation',
      errors: errorTree,
      status: 401,
    })
  }

  return undefined
})
