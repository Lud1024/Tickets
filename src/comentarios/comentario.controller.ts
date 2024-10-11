// comentarios/comentario.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ComentarioService } from './comentario.service';
import { CrearComentarioDto } from './dto/crear-comentario.dto';
import { ActualizarComentarioDto } from './dto/actualizar-comentario.dto';

@Controller('comentarios')
export class ComentarioController {
  constructor(private readonly comentarioService: ComentarioService) { }

  @Get()
  findAll() {
    return this.comentarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.comentarioService.findOne(id);
  }

  @Post()
  create(@Body() crearComentarioDto: CrearComentarioDto) {
    return this.comentarioService.create(crearComentarioDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() actualizarComentarioDto: ActualizarComentarioDto) {
    return this.comentarioService.update(id, actualizarComentarioDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.comentarioService.remove(id);
    return { message: `Registro Eliminado Exitosamente` };
  }
}
