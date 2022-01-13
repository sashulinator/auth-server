import { Controller, Delete, Get, Header, Post, Put, Req } from '@nestjs/common'
import { UserService } from './user.service'
import { parseInteger } from '../utils/parse-integer'
import { validateFindManyParams, validateId } from '../helpers/validators'
import { SearchQuery, FindManyParams } from '../types'
import { RequestWithBody, RequestWithQuery } from '../utils/types'
import { PrismaClient, User } from '@prisma/client'
import validateUserInput from 'src/users/user.validators'
import { array, only, required, requiredOnly, validate } from 'src/utils/errors/request-data-validator'
import { LocalAuthService } from 'src/local-auth/local-auth.service'
import generateHash from 'src/utils/generate-hash'
import generateHashedPassword from 'src/utils/generate-hash-password'
import {
  assertMatchPattern,
  assertNotMoreThan,
  assertNotUndefined,
  assertNumber,
  assertString,
  assertStringifiedNumber,
} from 'src/utils/assertions'

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
    const userInput = request?.body

    only({
      username: validate([[assertMatchPattern, /^(\w*)$/]]),
      password: validate([assertString]),
      address: requiredOnly({
        code: validate([assertStringifiedNumber]),
        building: validate([assertStringifiedNumber]),
        landmarkIds: array(validate([assertString])),
        landmarksCoords: array(
          requiredOnly({
            longitude: validate([assertNumber]),
            latitude: validate([assertNumber]),
          }),
        ),
      }),
    })(userInput, 'userInput')

    // const formatedUserInput = {
    //   username: userInput?.username?.toLowerCase(),
    //   email: userInput?.email?.toLowerCase(),
    //   name: userInput?.name,
    // }

    // const createdUser = await prisma.$transaction(async () => {
    //   const user = await this.userService.create(formatedUserInput)
    //   const salt = await generateHash()

    //   this.localAuthService.savePassword({
    //     userId: user.id,
    //     password: generateHashedPassword(userInput.password, salt),
    //     salt,
    //   })

    //   return user
    // })

    // return createdUser
  }

  @Header('Content-Type', 'application/json')
  @Put()
  async update(@Req() request: RequestWithBody<User>) {
    const userInput = request?.body

    // new RequestDataValidator(userInput).push([validateUserInput, validateId]).validate()

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
