// usuarios/dto/recovery.dto.ts
import { IsNotEmpty, IsString } from 'class-validator';

export class RecoveryUsuarioDto {
  @IsString()
  @IsNotEmpty()
  nombre_usuario: string;

  @IsString()
  @IsNotEmpty()
  palabra_secreta: string;
}
