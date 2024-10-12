// historialCambios/historial-cambio.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HistorialCambio } from './entities/historial-cambio.entity';
import { CrearHistorialCambioDto } from './dto/crear-historial-cambio.dto';

@Injectable()
export class HistorialCambioService {
  constructor(
    @InjectRepository(HistorialCambio)
    private readonly historialRepository: Repository<HistorialCambio>,
  ) {}

  findAll(): Promise<HistorialCambio[]> {
    return this.historialRepository.find({ relations: ['ticket', 'usuario'] });
  }

  create(crearHistorialDto: CrearHistorialCambioDto): Promise<HistorialCambio> {
    const historialCambio = this.historialRepository.create(crearHistorialDto);
    return this.historialRepository.save(historialCambio);
  }
}
