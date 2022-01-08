import { Controller, Delete, Get, Header, Post, Put, Req } from '@nestjs/common'
import { UserService } from './user.service'
import { parseInteger } from '../utils/parse-integer'
import { validateFindManyParams, validateId } from '../helpers/validators'
import { SearchQuery, FindManyParams } from '../types'
import { RequestWithBody, RequestWithQuery } from '../utils/types'
import { User } from '@prisma/client'
import validateUserInput from 'src/users/user.validators'
import RequestDataValidator from 'src/utils/errors/request-data-validator'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Header('Content-Type', 'application/json')
  @Get()
  async findMany(@Req() request: RequestWithQuery<FindManyParams<string> & SearchQuery>) {
    const query = request?.query

    new RequestDataValidator(query, true).push([validateFindManyParams({ maxTake: 50 })]).validate()

    const take = parseInteger(query.take)
    const skip = parseInteger(query.skip)

    return this.userService.findMany({ take, skip }, query.searchQuery)
  }

  @Header('Content-Type', 'application/json')
  @Post()
  async create(@Req() request: RequestWithBody<User>) {
    const userInput = request?.body

    new RequestDataValidator(userInput).push([validateUserInput]).validate()

    const formatedUserInput = {
      username: userInput?.name?.toLowerCase(),
      email: userInput?.email?.toLowerCase(),
    }

    return this.userService.create(formatedUserInput)
  }

  @Header('Content-Type', 'application/json')
  @Put()
  async update(@Req() request: RequestWithBody<User>) {
    const userInput = request?.body

    new RequestDataValidator(userInput).push([validateUserInput, validateId]).validate()

    const formatedUserInput = {
      username: userInput?.name?.toLowerCase(),
      email: userInput?.email?.toLowerCase(),
      id: userInput.id,
    }

    return this.userService.updateById(formatedUserInput)
  }

  @Header('Content-Type', 'application/json')
  @Delete()
  async pruneMany(@Req() request: RequestWithBody<number[]>) {
    const ids = request?.body

    return this.userService.pruneMany(ids)
  }
}
