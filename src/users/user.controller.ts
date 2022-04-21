import { Body, Controller, Delete, Get, Header, Post, Put, Req, UsePipes } from '@nestjs/common'
import { UserService } from './user.service'
import { parseInteger } from '../utils/parse-integer'
import { SearchQuery, FindManyParams, UpdateUser, CreateUser, Pageable } from 'src/common/types'
import { RequestWithBody, RequestWithQuery } from '../utils/types'
import { Prisma, PrismaClient, User } from '@prisma/client'
import { LocalAuthService } from 'src/local-auth/local-auth.service'
import generateHash from 'src/utils/generate-hash'
import generateHashedPassword from 'src/utils/generate-hash-password'
import { BodyValidationPipe } from 'src/utils/body-validation-pipe'
import { createUserValidator, updateUserValidator } from 'src/common/schemas'

const prisma = new PrismaClient()

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService, private readonly localAuthService: LocalAuthService) {}

  @Header('Content-Type', 'application/json')
  @Get()
  async findMany(@Req() request: RequestWithQuery<FindManyParams<string> & SearchQuery>): Promise<Pageable<User>> {
    const query = request?.query

    const take = parseInteger(query.take)
    const skip = parseInteger(query.skip)

    return this.userService.findMany({ take, skip }, query.searchQuery)
  }

  @Header('Content-Type', 'application/json')
  @Post()
  @UsePipes(new BodyValidationPipe(createUserValidator))
  async create(@Body() createUserInput: CreateUser): Promise<User> {
    const formatedUserInput = {
      username: createUserInput?.username?.toLowerCase(),
      email: createUserInput?.email?.toLowerCase(),
      fullname: createUserInput?.fullname,
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
  @UsePipes(new BodyValidationPipe(updateUserValidator))
  async update(@Body() updateUserInput: UpdateUser): Promise<User> {
    const formatedUserInput = {
      username: updateUserInput?.username?.toLowerCase(),
      email: updateUserInput?.email?.toLowerCase(),
      fullname: updateUserInput.fullname,
      id: updateUserInput.id,
    }

    return this.userService.updateById(formatedUserInput)
  }

  @Header('Content-Type', 'application/json')
  @Delete()
  async pruneMany(@Req() request: RequestWithBody<string[]>): Promise<Prisma.BatchPayload> {
    const ids = request?.body

    return this.userService.pruneMany(ids)
  }
}
