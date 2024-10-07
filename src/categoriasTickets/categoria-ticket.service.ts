// categoriasTickets/categoria-ticket.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriaTicket } from './entities/categoria-ticket.entity';
import { CrearCategoriaTicketDto } from './dto/crear-categoria-ticket.dto';
import { ActualizarCategoriaTicketDto } from './dto/actualizar-categoria-ticket.dto';

@Injectable()
export class CategoriaTicketService {
  constructor(
    @InjectRepository(CategoriaTicket)
    private readonly categoriaTicketRepository: Repository<CategoriaTicket>,
  ) {}

  findAll(): Promise<CategoriaTicket[]> {
    return this.categoriaTicketRepository.find();
  }

  findOne(id: number): Promise<CategoriaTicket> {
    return this.categoriaTicketRepository.findOneBy({ id_categoria_ticket: id });
  }

  create(crearCategoriaTicketDto: CrearCategoriaTicketDto): Promise<CategoriaTicket> {
    // Convertir el DTO en la entidad CategoriaTicket
    const categoriaTicket = new CategoriaTicket();
    categoriaTicket.nombre_categoria = crearCategoriaTicketDto.nombre_categoria;
    categoriaTicket.descripcion = crearCategoriaTicketDto.descripcion || '';
    return this.categoriaTicketRepository.save(categoriaTicket);
  }

  async update(id: number, actualizarCategoriaTicketDto: ActualizarCategoriaTicketDto): Promise<CategoriaTicket> {
    // Buscar la categoría existente
    const categoriaTicket = await this.categoriaTicketRepository.findOneBy({ id_categoria_ticket: id });

    // Verificar si existe
    if (!categoriaTicket) {
      throw new Error('La categoría de ticket no existe');
    }

    // Actualizar los campos desde el DTO
    if (actualizarCategoriaTicketDto.nombre_categoria) {
      categoriaTicket.nombre_categoria = actualizarCategoriaTicketDto.nombre_categoria;
    }
    if (actualizarCategoriaTicketDto.descripcion) {
      categoriaTicket.descripcion = actualizarCategoriaTicketDto.descripcion;
    }

    return this.categoriaTicketRepository.save(categoriaTicket);
  }

  async remove(id: number): Promise<void> {
    await this.categoriaTicketRepository.delete(id);
  }
}
