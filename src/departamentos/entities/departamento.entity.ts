// departamentos/entities/departamento.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('departamentos')
export class Departamento {
  @PrimaryGeneratedColumn()
  id_departamento: number;

  @Column({ length: 100 })
  nombre_departamento: string;

  @Column('text')
  descripcion: string;
}
