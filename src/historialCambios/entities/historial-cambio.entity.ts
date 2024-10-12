// historialCambios/entities/historial-cambio.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Ticket } from '../../tickets/entities/ticket.entity';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity('historialcambios')
export class HistorialCambio {
  @PrimaryGeneratedColumn()
  id_historial: number;

  @ManyToOne(() => Ticket, ticket => ticket.id_ticket)
  @JoinColumn({ name: 'id_ticket' })
  ticket: Ticket;

  @Column()
  id_ticket: number;

  @ManyToOne(() => Usuario, usuario => usuario.id_usuario)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;

  @Column({ type: 'uuid' })
  id_usuario: string; // UUID del usuario que realizó el cambio

  @Column({ length: 50 })
  campo_modificado: string;

  @Column({ length: 255 })
  valor_anterior: string;

  @Column({ length: 255 })
  valor_nuevo: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_modificacion: Date;
}
