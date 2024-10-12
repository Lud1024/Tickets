// historialCambios/historial-cambio.controller.ts

import { Controller, Get, Post, Body } from '@nestjs/common';
import { HistorialCambioService } from './historial-cambio.service';
import { CrearHistorialCambioDto } from './dto/crear-historial-cambio.dto';

@Controller('historialcambios')
export class HistorialCambioController {
  constructor(private readonly historialService: HistorialCambioService) {}

  @Get()
  findAll() {
    return this.historialService.findAll();
  }

  @Post()
  create(@Body() crearHistorialDto: CrearHistorialCambioDto) {
    return this.historialService.create(crearHistorialDto);
  }
}
