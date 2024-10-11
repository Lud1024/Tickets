// asignacionTickets/asignacion-ticket.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AsignacionTicket } from './entities/asignacion-ticket.entity';
import { CrearAsignacionTicketDto } from './dto/crear-asignacion-ticket.dto';
import { ActualizarAsignacionTicketDto } from './dto/actualizar-asignacion-ticket.dto';

@Injectable()
export class AsignacionTicketService {
  constructor(
    @InjectRepository(AsignacionTicket)
    private readonly asignacionRepository: Repository<AsignacionTicket>,
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

  create(crearAsignacionDto: CrearAsignacionTicketDto): Promise<AsignacionTicket> {
    const asignacion = this.asignacionRepository.create(crearAsignacionDto);
    return this.asignacionRepository.save(asignacion);
  }

  async update(id: number, actualizarAsignacionDto: ActualizarAsignacionTicketDto): Promise<AsignacionTicket> {
    await this.asignacionRepository.update(id, actualizarAsignacionDto);
    return this.asignacionRepository.findOneBy({ id_asignacion: id });
  }

  async remove(id: number): Promise<void> {
    await this.asignacionRepository.delete(id);
  }
}
