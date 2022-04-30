import { Body, Controller, Delete, Get, Header, Param, Post, Put, Query, Req } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

export interface Comp {
  id: string
  compSchemaId: string
  compName: string
  name: string
  type: string
  path: string
  // дефвалуе вынести в пропс и юзер не должен в пас писать слово пропс для формы элемента
  defaultValue?: string
  props?: Record<string, unknown>
  childCompIds?: string[]
}

export interface Schema {
  id: string
  name: string
  title: string
  description: string
  comps: Comp
}

const prisma = new PrismaClient()

@Controller('schemas')
export class SchemaController {
  @Header('Content-Type', 'application/json')
  @Get('/list')
  async findManyList(@Query('ids') ids, @Query('types') types) {
    return prisma.schema.findMany({
      where: {
        id: { in: ids },
        type: { in: types },
      },
    })
  }

  @Header('Content-Type', 'application/json')
  @Get()
  async findMany(@Query('ids') ids) {
    const schemas = await prisma.schema.findMany({
      where: {
        id: { in: ids },
      },
    })

    const normSchemas = schemas.reduce((acc, schema) => {
      acc[schema.id] = schema
      return acc
    }, {})

    return normSchemas
  }

  @Get(':id')
  async findOne(@Param('id') id) {
    return prisma.schema.findFirst({
      where: {
        id,
      },
    })
  }

  @Delete()
  async deleteMany(@Body() body) {
    return prisma.schema.deleteMany({
      where: {
        id: { in: body.ids },
      },
    })
  }

  @Header('Content-Type', 'application/json')
  @Post()
  async create(@Body() createSchemaInput: Schema) {
    return prisma.schema.create({ data: createSchemaInput as any })
  }

  @Header('Content-Type', 'application/json')
  @Put()
  async update(@Body() createSchemaInput: Schema) {
    return prisma.schema.update({ where: { id: createSchemaInput.id }, data: createSchemaInput as any })
  }
}
