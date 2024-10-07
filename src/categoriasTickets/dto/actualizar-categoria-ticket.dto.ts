// categoriasTickets/dto/actualizar-categoria-ticket.dto.ts

import { IsString, Length, IsOptional } from 'class-validator';

export class ActualizarCategoriaTicketDto {
  @IsOptional()
  @IsString()
  @Length(1, 100)
  nombre_categoria?: string;

  @IsOptional()
  @IsString()
  descripcion?: string;
}
