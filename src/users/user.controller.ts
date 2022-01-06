import { Controller, Get, Header, Post, Req } from '@nestjs/common'
import { UserService } from './user.service'
import { parseInteger } from '../utils/parse-integer'
import validateFindManyParams from '../validators/find-many'
import { FindManyParams, RequestWithBody, RequestWithQuery } from 'src/type'
import { User } from '@prisma/client'
import validateUserInput from 'src/validators/user'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Header('Content-Type', 'application/json')
  @Get()
  async findMany(@Req() request: RequestWithQuery<FindManyParams<string>>) {
    const query = request?.query

    /**
     * TODO: сделать валидатор по типу:
     * new Validator(params)
     *    .validateFindManyParams({ maxTake: 50 })
     *    .validateSmthElse({ foo: bar })
     */
    validateFindManyParams({ take: query.take, skip: query.take }, { maxTake: 50 })

    const take = parseInteger(query.take)
    const skip = parseInteger(query.skip)

    return this.userService.findMany({ take, skip })
  }

  @Header('Content-Type', 'application/json')
  @Post()
  async create(@Req() request: RequestWithBody<User>) {
    const createUserInput = request?.body

    const formatedUserInput = {
      name: createUserInput?.name?.toLowerCase(),
      email: createUserInput?.email?.toLowerCase(),
    }

    validateUserInput(formatedUserInput)

    return this.userService.create(formatedUserInput)
  }
}
