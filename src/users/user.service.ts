import { Injectable } from '@nestjs/common'
import { PrismaClient, User } from '@prisma/client'
import { CreateInput, UpdateInput, FindManyParams } from '../type'

const prisma = new PrismaClient()

@Injectable()
export class UserService {
  async findMany(params: FindManyParams, searchQuery?: string) {
    const pagination = {
      take: params.take ?? 10,
      skip: params.skip,
      orderBy: { updatedAt: 'desc' },
    } as const

    const filters = searchQuery
      ? {
          where: {
            OR: [
              {
                name: {
                  contains: searchQuery,
                },
              },
              {
                email: {
                  contains: searchQuery,
                },
              },
            ],
          },
        }
      : null

    const [total, items] = await prisma.$transaction([
      prisma.user.count(filters),
      prisma.user.findMany({ ...pagination, ...filters }),
    ])

    return {
      total,
      items,
    }
  }

  async create(input: CreateInput<Omit<User, 'name' | 'phone'>>) {
    return prisma.user.create({ data: input })
  }

  async updateById(input: UpdateInput<Omit<User, 'name' | 'phone'>>) {
    return prisma.user.update({ data: input, where: { id: input.id } })
  }

  async pruneMany(input: number[]) {
    return prisma.user.deleteMany({ where: { id: { in: input } } })
  }
}
