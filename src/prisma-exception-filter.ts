// see https://www.prisma.io/docs/reference/api-reference/error-reference

import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from '@nestjs/common'
import { Request, Response } from 'express'
import { Prisma } from '@prisma/client'
import { BaseError, CollectableError } from './utils/errors/errors'

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError & { meta?: { target?: string[] } }, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    // const request = ctx.getRequest<Request>()

    const message = exception.message
    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR
    let errors: BaseError['errors']

    // P2002 - uniq constrain
    if (exception.code === 'P2002') {
      statusCode = HttpStatus.CONFLICT
    }

    if (exception.meta?.target?.length) {
      errors = exception.meta?.target.reduce((acc, key) => {
        acc[key] = new CollectableError({
          key,
          message: exception.message,
          errorCode: exception.code,
        })

        return acc
      }, {})
    }

    response.status(statusCode).json({
      errors,
      statusCode,
      errcode: 'ECONFLICT',
      timestamp: new Date().toISOString(),
      message,
    })
  }
}
