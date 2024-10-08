// tickets/ticket.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from './entities/ticket.entity';
import { CrearTicketDto } from './dto/crear-ticket.dto';
import { ActualizarTicketDto } from './dto/actualizar-ticket.dto';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>,
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
    // Crear manualmente el objeto Ticket a partir del DTO
    const ticket = new Ticket();

    // Asignar propiedades del DTO al objeto Ticket
    ticket.titulo = crearTicketDto.titulo;
    ticket.descripcion = crearTicketDto.descripcion;
    ticket.prioridad = crearTicketDto.prioridad;
    ticket.estado = crearTicketDto.estado;
    ticket.id_usuario_creador = crearTicketDto.id_usuario_creador;
    ticket.id_tecnico_asignado = crearTicketDto.id_tecnico_asignado;
    ticket.id_departamento = crearTicketDto.id_departamento;
    ticket.id_categoria_ticket = crearTicketDto.id_categoria_ticket;

    // Guardar el nuevo ticket en el repositorio
    return await this.ticketRepository.save(ticket);
  }

  async update(id: number, actualizarTicketDto: ActualizarTicketDto): Promise<Ticket> {
    await this.ticketRepository.update(id, actualizarTicketDto);
    return this.ticketRepository.findOneBy({ id_ticket: id });
  }

  async remove(id: number): Promise<void> {
    await this.ticketRepository.delete(id);
  }
}
