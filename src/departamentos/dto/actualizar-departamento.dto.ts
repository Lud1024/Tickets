// departamentos/dto/actualizar-departamento.dto.ts

import { IsString, Length, IsOptional } from 'class-validator';

export class ActualizarDepartamentoDto {
  @IsOptional()
  @IsString()
  @Length(1, 100)
  nombre_departamento?: string;

  @IsOptional()
  @IsString()
  descripcion?: string;
}
