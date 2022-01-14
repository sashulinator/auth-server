import { assertString } from '../assertions'
import { process } from './process'
import { ValidationError } from './errors'
import expectMatchError from './expect-match-error'
import { validate } from './validate'

describe(process.name, () => {
  it('return errorTree', () => {
    const schema = {
      user: {
        username: validate([assertString]),
      },
    }

    const { errorTree } = process(schema, { user: { username: 77 } })

    return expectMatchError(() => errorTree, {
      user: {
        username: new ValidationError({
          key: 'username',
          value: 77,
          errorCode: 'assertString',
          message: 'is not a string',
        }),
      },
    })
  })

  it('return errorTree', () => {
    const schema = {
      users: [
        {
          username: validate([assertString]),
        },
      ],
    }

    const { errorTree } = process(schema, { users: [{ username: 77 }] })

    return expectMatchError(() => errorTree, {
      users: {
        '0': {
          username: new ValidationError({
            key: 'username',
            value: 77,
            errorCode: 'assertString',
            message: 'is not a string',
          }),
        },
      },
    })
  })
})
