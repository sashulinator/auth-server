import {
  assertMatchPattern,
  assertNotMoreThan,
  assertNotUndefined,
  assertNumber,
  assertString,
  assertStringifiedNumber,
} from './assertions'

interface ValidationProps {
  validatorName: string
  message: string
  key: string
  value: unknown
  key2?: string
  value2?: unknown
}

export class ValidationError extends Error {
  validatorName: string
  message: string
  key: string
  value: unknown
  key2?: string
  value2?: unknown

  constructor(props: ValidationProps) {
    super(props.message)
    this.key = props.key
    this.value = props.value
    this.key2 = props.key2
    this.value2 = props.value2
    this.validatorName = props.validatorName
  }
}

export function validateString(input: unknown, key: string): void {
  try {
    assertString(input)
  } catch (error) {
    if (error instanceof Error) {
      throw new ValidationError({
        key,
        value: input,
        message: error.message,
        validatorName: validateString.name,
      })
    }
  }
}

export function validateNumber(input: unknown, key: string): void {
  try {
    assertNumber(input)
  } catch (error) {
    if (error instanceof Error) {
      throw new ValidationError({
        key,
        value: input,
        message: error.message,
        validatorName: validateNumber.name,
      })
    }
  }
}

export function validateNotUndefined(input: unknown, key: string): void {
  try {
    assertNotUndefined(input)
  } catch (error) {
    if (error instanceof Error) {
      throw new ValidationError({
        key,
        value: input,
        message: error.message,
        validatorName: validateNotUndefined.name,
      })
    }
  }
}

export function validateNotMoreThan(input: unknown, num: number, key: string, maxName?: string): void {
  try {
    assertNotMoreThan(input, num)
  } catch (error) {
    if (error instanceof Error) {
      throw new ValidationError({
        key,
        value: input,
        message: error.message,
        validatorName: validateNotMoreThan.name,
        key2: maxName,
        value2: num,
      })
    }
  }
}

export function validateStringifiedNumber(input: unknown, key: string): void {
  try {
    assertStringifiedNumber(input)
  } catch (error) {
    if (error instanceof Error) {
      throw new ValidationError({
        key,
        value: input,
        message: error.message,
        validatorName: validateStringifiedNumber.name,
      })
    }
  }
}

export function validateByPattern(input: unknown, pattern: unknown, key: string, patternName?: string): void {
  try {
    assertMatchPattern(input, pattern)
  } catch (error) {
    if (error instanceof Error) {
      throw new ValidationError({
        key,
        value: input,
        message: error.message,
        validatorName: validateByPattern.name,
        value2: pattern.toString(),
        key2: patternName,
      })
    }
  }
}
