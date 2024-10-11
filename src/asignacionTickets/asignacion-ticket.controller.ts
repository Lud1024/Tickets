// asignacionTickets/asignacion-ticket.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AsignacionTicketService } from './asignacion-ticket.service';
import { CrearAsignacionTicketDto } from './dto/crear-asignacion-ticket.dto';
import { ActualizarAsignacionTicketDto } from './dto/actualizar-asignacion-ticket.dto';

@Controller('asignaciontickets')
export class AsignacionTicketController {
  constructor(private readonly asignacionService: AsignacionTicketService) { }

  @Get()
  findAll() {
    return this.asignacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.asignacionService.findOne(id);
  }

  @Post()
  create(@Body() crearAsignacionDto: CrearAsignacionTicketDto) {
    return this.asignacionService.create(crearAsignacionDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() actualizarAsignacionDto: ActualizarAsignacionTicketDto) {
    return this.asignacionService.update(id, actualizarAsignacionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.asignacionService.remove(id);
    return { message: `Registro Eliminado Exitosamente` };
  }
}
