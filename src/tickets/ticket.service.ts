// tickets/ticket.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from './entities/ticket.entity';
import { CrearTicketDto } from './dto/crear-ticket.dto';
import { ActualizarTicketDto } from './dto/actualizar-ticket.dto';
import { HistorialCambioService } from '../historialCambios/historial-cambio.service';  // Importamos el servicio del historial de cambios

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>,
    private readonly historialCambioService: HistorialCambioService,  // Inyectamos el servicio del historial de cambios
  ) {}

  findAll(): Promise<Ticket[]> {
    return this.ticketRepository.find({ relations: ['usuario_creador', 'tecnico_asignado', 'departamento', 'categoria_ticket'] });
  }

  findOne(id: number): Promise<Ticket> {
    return this.ticketRepository.findOne({
      where: { id_ticket: id },
      relations: ['usuario_creador', 'tecnico_asignado', 'departamento', 'categoria_ticket'],
    });
  }

  async create(crearTicketDto: CrearTicketDto): Promise<Ticket> {
    const ticket = this.ticketRepository.create(crearTicketDto);
    return this.ticketRepository.save(ticket);
  }

  async update(id: number, actualizarTicketDto: ActualizarTicketDto, usuarioId: string): Promise<Ticket> {
    const ticket = await this.ticketRepository.findOneBy({ id_ticket: id });

    // Comprobar qué campos han cambiado y registrar los cambios en el historial
    if (ticket.estado !== actualizarTicketDto.estado) {
      await this.historialCambioService.create({
        id_ticket: ticket.id_ticket,
        id_usuario: usuarioId,
        campo_modificado: 'estado',
        valor_anterior: ticket.estado,
        valor_nuevo: actualizarTicketDto.estado,
      });
    }

    if (ticket.prioridad !== actualizarTicketDto.prioridad) {
      await this.historialCambioService.create({
        id_ticket: ticket.id_ticket,
        id_usuario: usuarioId,
        campo_modificado: 'prioridad',
        valor_anterior: ticket.prioridad,
        valor_nuevo: actualizarTicketDto.prioridad,
      });
    }

    await this.ticketRepository.update(id, actualizarTicketDto);
    return this.ticketRepository.findOneBy({ id_ticket: id });
  }

  async remove(id: number): Promise<void> {
    await this.ticketRepository.delete(id);
  }
}
