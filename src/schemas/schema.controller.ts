import { Body, Controller, Delete, Get, Header, Param, Post, Put, Query, Req } from '@nestjs/common'
import { PrismaClient, Schema } from '@prisma/client'
import { isObject } from '@savchenko91/schema-validator'
import { Comp } from 'src/common/types'

const prisma = new PrismaClient()

export function isComp(input: unknown): input is Comp {
  return isObject(input) && 'compSchemaId' in input
}

@Controller('schemas')
export class SchemaController {
  @Header('Content-Type', 'application/json')
  @Get('/risk-type')
  async riskType() {
    return [
      ['RT1', 'операционный риск'],
      ['RT2', 'репутационный риск'],
      ['RT3', 'рыночный риск'],
    ]
  }

  @Get('dependencies')
  async findDependencies(@Query('ids') ids: string[]) {
    const schemas = await SchemaController.findDependencySchemas(ids, [], [])

    const normSchemas = schemas.reduce((acc, schema) => {
      acc[schema.id] = schema
      return acc
    }, {})

    return normSchemas
  }

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

  static async findDependencySchemas(
    idsToFind: string[],
    foundIds: string[],
    foundSchemas: Schema[],
  ): Promise<Schema[]> {
    const schemas = await prisma.schema.findMany({
      where: {
        id: { in: idsToFind },
      },
    })

    const newFoundSchemas = [...foundSchemas, ...schemas]
    const newFoundIds = schemas
      .map((schema) =>
        Object.values(schema.data).map((comp) => (isComp(comp) ? comp.compSchemaId : comp.linkedSchemaId)),
      )
      .flat()

    // TODO выкинуть нот фаунд

    const setNewFoundIds = new Set([...newFoundIds, ...foundIds])

    if (setNewFoundIds.size === foundIds.length) {
      return newFoundSchemas
    }

    const newIdsToFind = [...setNewFoundIds].filter((x) => !foundIds.includes(x))

    return SchemaController.findDependencySchemas(newIdsToFind, [...setNewFoundIds], newFoundSchemas)
  }
}
