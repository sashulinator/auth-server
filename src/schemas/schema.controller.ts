import { Body, Controller, Get, Header, Param, Post, Req } from '@nestjs/common'
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
  @Get()
  async findMany(@Req() request) {
    return prisma.schema.findMany()
  }

  @Get(':id')
  async findOneWithComps(@Param('id') id) {
    const FSchema = await prisma.schema.findFirst({
      where: {
        id,
      },
    })

    const ids = Object.values(FSchema.comps).map((comp) => comp.compSchemaId)

    const CSchemas = await prisma.schema.findMany({
      where: {
        id: { in: [...new Set(ids)] },
      },
    })

    const normCSchemas = CSchemas.reduce((acc, CSchema) => {
      acc[CSchema.id] = CSchema
      return acc
    }, {})

    return {
      FSchema,
      CSchemas: normCSchemas,
    }
  }

  @Header('Content-Type', 'application/json')
  @Post()
  async create(@Body() createSchemaInput: Schema) {
    return prisma.schema.create({ data: createSchemaInput as any })
  }
}
