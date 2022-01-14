import { assertMatchPattern, assertNumber } from '../assertions'
import { ValidationError } from './errors'
import expectMatchError from './expect-match-error'
import { validate } from './validate'

describe(validate.name, () => {
  it('throws error', () => {
    const emitValidation = validate([assertNumber])

    return expectMatchError(
      () => emitValidation('string', 'test'),
      new ValidationError({
        key: 'test',
        value: 'string',
        errorCode: 'assertNumber',
        message: 'is not a number',
      }),
    )
  })

  it('returns error', () => {
    const emitValidation = validate([assertNumber])

    return expectMatchError(
      () => emitValidation('string', 'test', false),
      new ValidationError({
        key: 'test',
        value: 'string',
        errorCode: 'assertNumber',
        message: 'is not a number',
      }),
    )
  })

  it('throws error for ComparingAssertion', () => {
    const emitValidation = validate([[assertMatchPattern, /test/, 'pattern']])

    return expectMatchError(
      () => emitValidation('string', 'test'),
      new ValidationError({
        key: 'test',
        value: 'string',
        key2: 'pattern',
        value2: '/test/',
        errorCode: 'assertMatchPattern',
        message: 'does not match the pattern',
      }),
    )
  })

  it('returns error for ComparingAssertion', () => {
    const emitValidation = validate([[assertMatchPattern, /test/, 'pattern']])

    return expectMatchError(
      () => emitValidation('string', 'test', false),
      new ValidationError({
        key: 'test',
        value: 'string',
        key2: 'pattern',
        value2: '/test/',
        errorCode: 'assertMatchPattern',
        message: 'does not match the pattern',
      }),
    )
  })
})
