import { Injectable } from '@nestjs/common'

import { prisma } from 'src/prisma-client'

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
