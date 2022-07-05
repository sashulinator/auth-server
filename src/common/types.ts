export interface FindManyParams<T = number> {
  take?: T
  skip?: T
}

export interface SearchQuery {
  searchQuery?: string
}

export interface Pageable<T> {
  total: number
  items: T[]
}

export interface CreateUser {
  username: string
  password: string
  email: string
  fullname: string
}

export interface UpdateUser extends CreateUser {
  id: string
}

export interface Comp {
  id: string
  compSchemaId: string
  name?: string
  title: string // eslint-disable-next-line @typescript-eslint/no-explicit-any
  undefinedOnDestroy?: boolean

  props?: Record<string, unknown>
  children?: string[]
}
