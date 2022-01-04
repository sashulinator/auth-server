import { Controller, Get, Header, Req } from '@nestjs/common'
import { UserService } from './user.service'
import { parseInteger } from '../utils/parse-integer'
import validateFindManyParams from '../validators/find-many'
import { FindManyParams, RequestWithQuery } from 'src/type'

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
}
