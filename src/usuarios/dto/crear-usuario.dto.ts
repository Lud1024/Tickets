import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CrearUsuarioDto {

    @IsString()
    @IsNotEmpty()
    nombre_usuario: string;

    @IsEmail()
    @IsNotEmpty()
    correo_electronico_usuario: string;

    @IsString()
    @IsOptional()
    rol_usuario?: string;

    @IsString()
    @MinLength(6)
    @IsNotEmpty()
    palabra_secreta: string;

    @IsString()
    @MinLength(6)
    @IsNotEmpty()
    contraseña: string;

    @IsString()
    @IsOptional()
    estado?: string;
}
