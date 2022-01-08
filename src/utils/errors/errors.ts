export abstract class CollectableError extends Error {
  key: string
  message: string

  constructor(message: string, key: string) {
    super(message)
    this.key = key
  }
}

interface ErrorWithCode {
  // very handy when you need to translate or to give more detailed information
  // depending on context on a client side
  // example: you try to create user and receive { errorCode: CONFLICT }
  // so you can show message "Such user already exists"
  errorCode: string
}

export class ValidationError extends CollectableError implements ErrorWithCode {
  message: string
  // can be a field name in a validated object
  key: string
  // can be a field value in a validated object
  value: unknown
  // can be a pattern name (email, uuid), a measuring system (kg, m) or a limit name (card/phone number limit)
  key2?: string
  // value that we somehow compared with ValidationError['value']
  value2?: unknown
  errorCode: string
  // why there is no 'children' property like ValidationError from nestjs?
  // Because it makes redundant nesting, we can show nesting by key { 'user.credentials[0]': ... }

  constructor(props: Omit<ValidationError, 'name'>) {
    super(props.message, props.key)
    this.key = props.key
    this.value = props.value
    this.key2 = props.key2
    this.value2 = props.value2
    this.errorCode = props.errorCode
  }
}
