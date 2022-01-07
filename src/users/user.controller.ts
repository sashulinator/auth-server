import { Controller, Delete, Get, Header, Post, Put, Req } from '@nestjs/common'
import { UserService } from './user.service'
import { parseInteger } from '../utils/parse-integer'
import { validateFindManyParams } from '../validators/common'
import { SearchQuery, RequestWithBody, RequestWithQuery, FindManyParams } from '../type'
import { User } from '@prisma/client'
import validateUserInput from 'src/validators/user'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Header('Content-Type', 'application/json')
  @Get()
  async findMany(@Req() request: RequestWithQuery<FindManyParams<string> & SearchQuery>) {
    const query = request?.query

    /**
     * TODO: сделать валидатор по типу:
     * new Validator(params)
     *    .validateFindManyParams({ maxTake: 50 })
     *    .validateSmthElse({ foo: bar })
     */
    validateFindManyParams(query, { maxTake: 50 })

    const take = parseInteger(query.take)
    const skip = parseInteger(query.skip)

    return this.userService.findMany({ take, skip }, query.searchQuery)
  }

  @Header('Content-Type', 'application/json')
  @Post()
  async create(@Req() request: RequestWithBody<User>) {
    const userInput = request?.body

    const formatedUserInput = {
      name: userInput?.name?.toLowerCase(),
      email: userInput?.email?.toLowerCase(),
    }

    validateUserInput(formatedUserInput)

    return this.userService.create(formatedUserInput)
  }

  @Header('Content-Type', 'application/json')
  @Put()
  async update(@Req() request: RequestWithBody<User>) {
    const userInput = request?.body

    const formatedUserInput = {
      name: userInput?.name?.toLowerCase(),
      email: userInput?.email?.toLowerCase(),
      id: userInput.id,
    }

    validateUserInput(formatedUserInput)

    return this.userService.updateById(formatedUserInput)
  }

  @Header('Content-Type', 'application/json')
  @Delete()
  async pruneMany(@Req() request: RequestWithBody<number[]>) {
    const ids = request?.body

    return this.userService.pruneMany(ids)
  }
}
