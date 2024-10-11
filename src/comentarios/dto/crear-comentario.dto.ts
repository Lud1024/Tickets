// comentarios/dto/crear-comentario.dto.ts

import { IsString, IsUUID, IsInt } from 'class-validator';

export class CrearComentarioDto {
  @IsInt()
  id_ticket: number;

  @IsUUID()
  id_usuario: string; // UUID del usuario que hace el comentario

  @IsString()
  contenido: string;
}
