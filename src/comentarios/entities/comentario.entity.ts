// comentarios/entities/comentario.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Ticket } from '../../tickets/entities/ticket.entity';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity('comentarios')
export class Comentario {
  @PrimaryGeneratedColumn()
  id_comentario: number;

  @ManyToOne(() => Ticket, ticket => ticket.id_ticket)
  @JoinColumn({ name: 'id_ticket' })
  ticket: Ticket;

  @Column()
  id_ticket: number;

  @ManyToOne(() => Usuario, usuario => usuario.id_usuario)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;

  @Column({ type: 'uuid' })
  id_usuario: string; // UUID del usuario que hizo el comentario

  @Column('text')
  contenido: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_comentario: Date;
}
