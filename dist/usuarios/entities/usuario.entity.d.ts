export declare class Usuario {
    id_usuario: string;
    nombre_usuario: string;
    correo_electronico_usuario: string;
    rol_usuario: string;
    palabra_secreta: string;
    contraseña: string;
    estado: string;
    fecha_creacion: Date;
    encriptarDatos(): Promise<void>;
}
