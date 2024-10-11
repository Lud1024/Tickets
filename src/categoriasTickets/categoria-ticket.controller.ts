// categoriasTickets/categoria-ticket.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CategoriaTicketService } from './categoria-ticket.service';
import { CategoriaTicket } from './entities/categoria-ticket.entity';
import { CrearCategoriaTicketDto } from './dto/crear-categoria-ticket.dto';
import { ActualizarCategoriaTicketDto } from './dto/actualizar-categoria-ticket.dto';

@Controller('categoriastickets')
export class CategoriaTicketController {
  constructor(private readonly categoriaTicketService: CategoriaTicketService) {}

  @Get()
  findAll(): Promise<CategoriaTicket[]> {
    return this.categoriaTicketService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<CategoriaTicket> {
    return this.categoriaTicketService.findOne(id);
  }

  @Post()
  create(@Body() crearCategoriaTicketDto: CrearCategoriaTicketDto): Promise<CategoriaTicket> {
    return this.categoriaTicketService.create(crearCategoriaTicketDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() actualizarCategoriaTicketDto: ActualizarCategoriaTicketDto): Promise<CategoriaTicket> {
    return this.categoriaTicketService.update(id, actualizarCategoriaTicketDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<{ message: string }> {
    await this.categoriaTicketService.remove(id);
    return { message: `Registro Eliminado Exitosamente` };
  }
}
