// categoriasTickets/dto/crear-categoria-ticket.dto.ts

import { IsString, Length, IsOptional } from 'class-validator';

export class CrearCategoriaTicketDto {
  @IsString()
  @Length(1, 100)
  nombre_categoria: string;

  @IsOptional()
  @IsString()
  descripcion?: string;
}
