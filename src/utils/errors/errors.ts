import { HttpException } from '@nestjs/common'

export class BaseError extends Error {
  public readonly errors?: { [keyFromCollectableError: string]: CollectableError }
  // depending on a context on a client side
  // example: you try to create a user and receive { errorCode: CONFLICT }
  // so you can show the message "Such user already exists"
  public readonly errorCode: string // very handy when you need to translate or to give a more detailed information

  constructor(props: Omit<BaseError, 'timestamp' | 'name'>) {
    super(props.message)
    this.errorCode = props.errorCode
    this.errors = props.errors
  }
}

export class ServerError extends HttpException implements BaseError {
  public readonly errorCode: string
  public readonly errors?: { [keyFromCollectableError: string]: CollectableError }

  constructor(props: Omit<BaseError, 'name'> & { status: number }) {
    super(props, props.status)
    this.errorCode = props.errorCode
  }
}

export class CollectableError extends BaseError {
  // can be a field name in a validated object
  key: string
  // can be a field value in a validated object
  value?: unknown
  // can be a pattern name (email, uuid), a measuring system (kg, m) or a limit name (card/phone number limit)
  key2?: string
  // value that we somehow compared with ValidationError['value']
  value2?: unknown
  constructor(props: Omit<CollectableError, 'name'>) {
    super({ ...props })
    this.key = props.key
    this.value = props.value
    this.key2 = props.key2
    this.value2 = props.value2
  }
}

export class ValidationError extends CollectableError {}
