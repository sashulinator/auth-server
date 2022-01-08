import { Request } from 'express'

export type CreateInput<T> = Omit<T, 'id' | 'createdAt' | 'deletedAt' | 'updatedAt'>

export type UpdateInput<T extends { id: string | number }> = Omit<T, 'createdAt' | 'deletedAt' | 'updatedAt'> &
  Pick<T, 'id'>

export type RequestWithQuery<T> = Request<undefined, undefined, undefined, Partial<T>>
export type RequestWithBody<T> = Request<undefined, undefined, Partial<T>>
