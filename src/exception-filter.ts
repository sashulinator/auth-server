import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from '@nestjs/common'
import { Request, Response } from 'express'
import { Prisma } from '@prisma/client'

@Catch(Prisma.PrismaClientKnownRequestError)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()
    const message = 'Db error'
    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR
    let errors: Record<string, any>

    if (exception.code === 'P2002') {
      const key = (exception.meta as any).target[0]
      statusCode = HttpStatus.CONFLICT
      errors = {
        [key]: {
          key,
          value: request.body[key],
          validatorName: 'conflict',
        },
      }
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
