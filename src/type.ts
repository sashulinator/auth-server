import { Request } from 'express'

export interface FindManyParams<T = number> {
  take?: T
  skip?: T
}

export type CreateInput<T> = Omit<T, 'id' | 'createdAt' | 'deletedAt' | 'updatedAt'>

export type UpdateInput<T extends { id: string | number }> = Omit<T, 'createdAt' | 'deletedAt' | 'updatedAt'> &
  Pick<T, 'id'>

export type RequestWithQuery<T> = Request<undefined, undefined, undefined, Partial<T>>
