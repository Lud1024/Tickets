// tickets/entities/ticket.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Departamento } from '../../departamentos/entities/departamento.entity';
import { CategoriaTicket } from '../../categoriasTickets/entities/categoria-ticket.entity';

@Entity('tickets')
export class Ticket {
  @PrimaryGeneratedColumn()
  id_ticket: number;

  @Column({ length: 255 })
  titulo: string;

  @Column('text')
  descripcion: string;

  @Column({
    type: 'enum',
    enum: ['Baja', 'Media', 'Alta'],
    default: 'Media',
  })
  prioridad: string;

  @Column({
    type: 'enum',
    enum: ['Abierto', 'En Proceso', 'Cerrado'],
    default: 'Abierto',
  })
  estado: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_creacion: Date;

  @Column({ type: 'timestamp', nullable: true })
  fecha_cierre: Date;

  @ManyToOne(() => Usuario, usuario => usuario.id_usuario)
  @JoinColumn({ name: 'id_usuario_creador' })
  usuario_creador: Usuario;

  @Column({ type: 'uuid' }) 
  id_usuario_creador: string;

  @ManyToOne(() => Usuario, usuario => usuario.id_usuario)
  @JoinColumn({ name: 'id_tecnico_asignado' })
  tecnico_asignado: Usuario;

  @Column({ type: 'uuid' }) 
  id_tecnico_asignado: string;

  @ManyToOne(() => Departamento, departamento => departamento.id_departamento)
  @JoinColumn({ name: 'id_departamento' })
  departamento: Departamento;

  @Column()
  id_departamento: number;

  @ManyToOne(() => CategoriaTicket, categoriaTicket => categoriaTicket.id_categoria_ticket)
  @JoinColumn({ name: 'id_categoria_ticket' })
  categoria_ticket: CategoriaTicket;

  @Column()
  id_categoria_ticket: number;
}
