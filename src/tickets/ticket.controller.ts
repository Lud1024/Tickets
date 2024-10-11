// tickets/ticket.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CrearTicketDto } from './dto/crear-ticket.dto';
import { ActualizarTicketDto } from './dto/actualizar-ticket.dto';
import { Ticket } from './entities/ticket.entity';

@Controller('tickets')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Get()
  findAll(): Promise<Ticket[]> {
    return this.ticketService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Ticket> {
    return this.ticketService.findOne(id);
  }

  @Post()
  create(@Body() crearTicketDto: CrearTicketDto): Promise<Ticket> {
    return this.ticketService.create(crearTicketDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() actualizarTicketDto: ActualizarTicketDto): Promise<Ticket> {
    return this.ticketService.update(id, actualizarTicketDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<{ message: string }> {
    await this.ticketService.remove(id);
    return { message: `Registro eliminado exitosamente` };
  }
}
