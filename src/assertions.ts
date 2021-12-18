import { isNumber } from './utils/is-number'
import { isString } from './utils/is-string'

export function assertNumber(input: unknown): asserts input is number {
  if (isNumber(input)) {
    return
  }

  throw Error('is not number')
}

export function assertNotNaN(input: unknown): asserts input is number {
  assertNumber(input)

  if (isNaN(input)) {
    throw Error('is not number')
  }
}

export function assertString(input: unknown): asserts input is string {
  if (isString(input)) {
    return
  }

  throw Error('is not string')
}

export function assertNotMoreThan(input: unknown, num: number): void {
  if (!isNumber(input) && !isString(input)) {
    throw Error(`must be string or number`)
  }

  if (!isNumber(num) && !isString(num)) {
    throw Error(`must be string or number`)
  }

  const inputNum = isNumber(input) ? input : parseInt(input)
  const numNum = isNumber(num) ? num : parseInt(num)

  assertNotNaN(inputNum)
  assertNotNaN(numNum)

  if (inputNum <= numNum) {
    return
  }

  throw Error(`more than ${num}`)
}

export function assertStringifiedNumber(input: unknown): void {
  assertString(input)

  try {
    assertNotNaN(parseInt(input, 10))
  } catch (e) {
    throw Error(`is not stringified number`)
  }
}
