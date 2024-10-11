// asignacionTickets/dto/actualizar-asignacion-ticket.dto.ts

import { IsString, IsUUID, IsOptional, IsInt } from 'class-validator';

export class ActualizarAsignacionTicketDto {
  @IsOptional()
  @IsInt()
  id_ticket?: number;

  @IsOptional()
  @IsUUID()
  id_tecnico?: string; // UUID del técnico que se asigna

  @IsOptional()
  @IsString()
  razon_asignacion?: string;
}
