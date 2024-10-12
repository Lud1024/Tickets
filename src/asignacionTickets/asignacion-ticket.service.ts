// asignacionTickets/asignacion-ticket.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AsignacionTicket } from './entities/asignacion-ticket.entity';
import { CrearAsignacionTicketDto } from './dto/crear-asignacion-ticket.dto';
import { ActualizarAsignacionTicketDto } from './dto/actualizar-asignacion-ticket.dto';
import { HistorialCambioService } from '../historialCambios/historial-cambio.service';  // Importamos el servicio del historial de cambios

@Injectable()
export class AsignacionTicketService {
  constructor(
    @InjectRepository(AsignacionTicket)
    private readonly asignacionRepository: Repository<AsignacionTicket>,
    private readonly historialCambioService: HistorialCambioService,  // Inyectamos el servicio del historial de cambios
  ) {}

  findAll(): Promise<AsignacionTicket[]> {
    return this.asignacionRepository.find({ relations: ['ticket', 'tecnico'] });
  }

  findOne(id: number): Promise<AsignacionTicket> {
    return this.asignacionRepository.findOne({
      where: { id_asignacion: id },
      relations: ['ticket', 'tecnico'],
    });
  }

  async create(crearAsignacionDto: CrearAsignacionTicketDto): Promise<AsignacionTicket> {
    const asignacion = this.asignacionRepository.create(crearAsignacionDto);
    return this.asignacionRepository.save(asignacion);
  }

  async update(id: number, actualizarAsignacionDto: ActualizarAsignacionTicketDto, usuarioId: string): Promise<AsignacionTicket> {
    const asignacion = await this.asignacionRepository.findOneBy({ id_asignacion: id });

    if (asignacion.id_tecnico !== actualizarAsignacionDto.id_tecnico) {
      await this.historialCambioService.create({
        id_ticket: asignacion.id_ticket,
        id_usuario: usuarioId,
        campo_modificado: 'id_tecnico',
        valor_anterior: asignacion.id_tecnico,
        valor_nuevo: actualizarAsignacionDto.id_tecnico,
      });
    }

    await this.asignacionRepository.update(id, actualizarAsignacionDto);
    return this.asignacionRepository.findOneBy({ id_asignacion: id });
  }

  async remove(id: number): Promise<void> {
    await this.asignacionRepository.delete(id);
  }
}
