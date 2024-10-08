// tickets/dto/actualizar-ticket.dto.ts

import { IsString, IsEnum, IsUUID, IsInt, IsOptional } from 'class-validator';

export class ActualizarTicketDto {
  @IsOptional()
  @IsString()
  titulo?: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsEnum(['Baja', 'Media', 'Alta'])
  prioridad?: string;

  @IsOptional()
  @IsEnum(['Abierto', 'En Proceso', 'Cerrado'])
  estado?: string;

  @IsOptional()
  @IsUUID()
  id_tecnico_asignado?: string; 

  @IsOptional()
  @IsInt()
  id_departamento?: number;

  @IsOptional()
  @IsInt()
  id_categoria_ticket?: number;
}
