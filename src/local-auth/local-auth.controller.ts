import { Controller, Post, Header, Req } from '@nestjs/common'
import { SearchQuery, FindManyParams } from '../types'
import { RequestWithQuery } from '../utils/types'
import { LocalAuthService } from './local-auth.service'

@Controller('auth')
export class LocalAuthController {
  constructor(private readonly userService: LocalAuthService) {}

  @Header('Content-Type', 'application/json')
  @Post()
  async login(@Req() request: RequestWithQuery<FindManyParams<string> & SearchQuery>) {
    return
  }
}
