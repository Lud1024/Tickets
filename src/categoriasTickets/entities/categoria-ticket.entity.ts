// categoriasTickets/entities/categoria-ticket.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categoriastickets')
export class CategoriaTicket {
  @PrimaryGeneratedColumn()
  id_categoria_ticket: number;

  @Column({ length: 100 })
  nombre_categoria: string;

  @Column('text')
  descripcion: string;
}
