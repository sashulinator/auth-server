import { Injectable } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface SavePasswordInput {
  salt: string
  password: string
  userId: string
}

@Injectable()
export class LocalAuthService {
  async savePassword(input: SavePasswordInput) {
    prisma.localAuth.upsert({
      where: {
        userId: input.userId,
      },
      create: input,
      update: input,
    })
  }
}
