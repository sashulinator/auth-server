import { Body, Controller, Delete, Get, Header, Param, Post, Put, Query } from '@nestjs/common'
import { Incident } from '@prisma/client'
import { prisma } from 'src/prisma-client'

@Controller('incidents')
export class IncidentController {
  @Header('Content-Type', 'application/json')
  @Get('/list')
  async findManyList(@Query('ids') ids) {
    return prisma.incident.findMany({
      where: {
        id: { in: ids },
      },
    })
  }

  @Header('Content-Type', 'application/json')
  @Get()
  async findMany(@Query('ids') ids) {
    const incidents = await prisma.incident.findMany({
      where: {
        id: { in: ids },
      },
    })

    const normIncidents = incidents.reduce((acc, incident) => {
      acc[incident.id] = incident
      return acc
    }, {})

    return normIncidents
  }

  @Get(':id')
  async findOne(@Param('id') id) {
    return prisma.incident.findFirst({
      where: {
        id,
      },
    })
  }

  @Delete()
  async deleteMany(@Body() body) {
    return prisma.incident.deleteMany({
      where: {
        id: { in: body.ids },
      },
    })
  }

  @Header('Content-Type', 'application/json')
  @Post()
  async create(@Body() createIncidentInput: Incident) {
    return prisma.incident.create({ data: createIncidentInput as any })
  }

  @Header('Content-Type', 'application/json')
  @Put()
  async update(@Body() createIncidentInput: Incident) {
    return prisma.incident.update({ where: { id: createIncidentInput.id }, data: createIncidentInput as any })
  }
}
