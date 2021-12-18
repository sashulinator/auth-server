import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
import { CreateInput, UpdateInput, FindManyParams } from '../type';

const prisma = new PrismaClient();

@Injectable()
export class UserService {
  async findMany(params: FindManyParams) {
    return prisma.user.findMany({
      take: params.take ?? 10,
      skip: params.skip,
    });
  }

  async create(input: CreateInput<User>) {
    return prisma.user.create({ data: input });
  }

  async updateById(input: UpdateInput<User>) {
    return prisma.user.update({ data: input, where: { id: input.id } });
  }

  async pruneById(input: UpdateInput<User>) {
    return prisma.user.delete({ where: { id: input.id } });
  }
}
