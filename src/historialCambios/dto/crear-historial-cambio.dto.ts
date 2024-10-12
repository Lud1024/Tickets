// historialCambios/dto/crear-historial-cambio.dto.ts

import { IsString, IsUUID, IsInt } from 'class-validator';

export class CrearHistorialCambioDto {
  @IsInt()
  id_ticket: number;

  @IsUUID()
  id_usuario: string; // UUID del usuario que realizó el cambio

  @IsString()
  campo_modificado: string;

  @IsString()
  valor_anterior: string;

  @IsString()
  valor_nuevo: string;
}
