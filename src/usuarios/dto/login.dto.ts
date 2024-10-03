import { IsNotEmpty, IsString } from 'class-validator';

export class LoginUsuarioDto {
  @IsString()
  @IsNotEmpty()
  nombre_usuario: string;

  @IsString()
  @IsNotEmpty()
  contraseña: string;
}
