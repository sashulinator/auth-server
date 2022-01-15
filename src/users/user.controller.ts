import { Controller, Delete, Get, Header, Post, Put, Req } from '@nestjs/common'
import { UserService } from './user.service'
import { parseInteger } from '../utils/parse-integer'
import { SearchQuery, FindManyParams } from 'src/common/types'
import { RequestWithBody, RequestWithQuery } from '../utils/types'
import { PrismaClient, User } from '@prisma/client'
import { LocalAuthService } from 'src/local-auth/local-auth.service'
import generateHash from 'src/utils/generate-hash'
import generateHashedPassword from 'src/utils/generate-hash-password'
import { validateCreateUser, validateUpdateUser } from '../common/schemas'

const prisma = new PrismaClient()

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService, private readonly localAuthService: LocalAuthService) {}

  @Header('Content-Type', 'application/json')
  @Get()
  async findMany(@Req() request: RequestWithQuery<FindManyParams<string> & SearchQuery>) {
    const query = request?.query

    const take = parseInteger(query.take)
    const skip = parseInteger(query.skip)

    return this.userService.findMany({ take, skip }, query.searchQuery)
  }

  @Header('Content-Type', 'application/json')
  @Post()
  async create(@Req() request: RequestWithBody<User & { password: string }>) {
    const createUserInput = request?.body

    validateCreateUser(createUserInput)

    const formatedUserInput = {
      username: createUserInput?.username?.toLowerCase(),
      email: createUserInput?.email?.toLowerCase(),
      name: createUserInput?.name,
    }

    const createdUser = await prisma.$transaction(async () => {
      const user = await this.userService.create(formatedUserInput)
      const salt = await generateHash()

      this.localAuthService.savePassword({
        userId: user.id,
        password: generateHashedPassword(createUserInput.password, salt),
        salt,
      })

      return user
    })

    return createdUser
  }

  @Header('Content-Type', 'application/json')
  @Put()
  async update(@Req() request: RequestWithBody<User>) {
    const userInput = request?.body

    validateUpdateUser(userInput)

    const formatedUserInput = {
      username: userInput?.username?.toLowerCase(),
      email: userInput?.email?.toLowerCase(),
      id: userInput.id,
    }

    return this.userService.updateById(formatedUserInput)
  }

  @Header('Content-Type', 'application/json')
  @Delete()
  async pruneMany(@Req() request: RequestWithBody<string[]>) {
    const ids = request?.body

    return this.userService.pruneMany(ids)
  }
}
