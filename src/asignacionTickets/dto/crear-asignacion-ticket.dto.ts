// asignacionTickets/dto/crear-asignacion-ticket.dto.ts

import { IsString, IsInt, IsUUID } from 'class-validator';

export class CrearAsignacionTicketDto {
  @IsInt()
  id_ticket: number;

  @IsUUID()
  id_tecnico: string; // UUID del técnico que se asigna

  @IsString()
  razon_asignacion: string;
}
