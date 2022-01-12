export class BaseError extends Error {
  public readonly errors?: { [keyFromCollectableError: string]: CollectableError }
  // depending on a context on a client side
  // example: you try to create a user and receive { errorCode: CONFLICT }
  // so you can show the message "Such user already exists"
  public readonly errorCode: string // very handy when you need to translate or to give a more detailed information

  constructor(message: string, errorCode: string) {
    super(message)
    this.errorCode = errorCode
  }
}

export class ServerError extends BaseError {
  public readonly status: number
  public readonly timestamp: string

  constructor(message: string, errorCode: string, status: number) {
    super(message, errorCode)
    this.status = status
    this.timestamp = new Date().toDateString()
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
    super(props.message, props.errorCode)
    this.key = props.key
    this.value = props.value
    this.key2 = props.key2
    this.value2 = props.value2
  }
}

export class ValidationError extends CollectableError {}
