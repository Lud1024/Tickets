import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateClientDto {

    @IsEmail()
    correo_electronico: string;

    @IsString()
    @MinLength(1)
    nombre: string;

    @IsString()
    @IsOptional()
    telefono?: string;

    @IsString()
    @IsOptional()
    direccion?: string;

    @IsString()
    @IsOptional()
    estado_cliente?: string;
}
