// asignacionTickets/entities/asignacion-ticket.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Ticket } from '../../tickets/entities/ticket.entity';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity('asignaciontickets')
export class AsignacionTicket {
  @PrimaryGeneratedColumn()
  id_asignacion: number;

  @ManyToOne(() => Ticket, ticket => ticket.id_ticket)
  @JoinColumn({ name: 'id_ticket' })
  ticket: Ticket;

  @Column()
  id_ticket: number;

  @ManyToOne(() => Usuario, usuario => usuario.id_usuario)
  @JoinColumn({ name: 'id_tecnico' })
  tecnico: Usuario;

  @Column({ type: 'uuid' })
  id_tecnico: string; // UUID del técnico asignado

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_asignacion: Date;

  @Column({ length: 255 })
  razon_asignacion: string;
}
