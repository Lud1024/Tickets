// tickets/dto/crear-ticket.dto.ts

import { IsString, IsEnum, IsUUID, IsInt } from 'class-validator';

export class CrearTicketDto {
  @IsString()
  titulo: string;

  @IsString()
  descripcion: string;

  @IsEnum(['Baja', 'Media', 'Alta'])
  prioridad: string;

  @IsEnum(['Abierto', 'En Proceso', 'Cerrado'])
  estado: string;

  @IsUUID() 
  id_usuario_creador: string;

  @IsUUID() 
  id_tecnico_asignado: string;

  @IsInt()
  id_departamento: number;

  @IsInt()
  id_categoria_ticket: number;
}
