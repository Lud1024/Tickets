// departamentos/departamentos.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { DepartamentosService } from './departamentos.service';
import { Departamento } from './entities/departamento.entity';
import { CrearDepartamentoDto } from './dto/crear-departamento.dto';
import { ActualizarDepartamentoDto } from './dto/actualizar-departamento.dto';

@Controller('departamentos')
export class DepartamentosController {
  constructor(private readonly departamentosService: DepartamentosService) {}

  @Get()
  findAll(): Promise<Departamento[]> {
    return this.departamentosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Departamento> {
    return this.departamentosService.findOne(id);
  }

  @Post()
  create(@Body() crearDepartamentoDto: CrearDepartamentoDto): Promise<Departamento> {
    return this.departamentosService.create(crearDepartamentoDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() actualizarDepartamentoDto: ActualizarDepartamentoDto): Promise<Departamento> {
    return this.departamentosService.update(id, actualizarDepartamentoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<{ message: string }> {
    await this.departamentosService.remove(id);
    return { message: `Registro eliminado exitosamente` };
  }
}
