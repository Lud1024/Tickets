// comentarios/dto/actualizar-comentario.dto.ts

import { IsString, IsUUID, IsOptional, IsInt } from 'class-validator';

export class ActualizarComentarioDto {
  @IsOptional()
  @IsInt()
  id_ticket?: number;

  @IsOptional()
  @IsUUID()
  id_usuario?: string; // UUID del usuario

  @IsOptional()
  @IsString()
  contenido?: string;
}
