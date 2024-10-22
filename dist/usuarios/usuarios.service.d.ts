import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { CrearUsuarioDto } from './dto/crear-usuario.dto';
import { ActualizarUsuarioDto } from './dto/actualizar-usuario.dto';
export declare class UsuariosService {
    private readonly usuarioRepository;
    constructor(usuarioRepository: Repository<Usuario>);
    crear(crearUsuarioDto: CrearUsuarioDto): Promise<Usuario>;
    obtenerTodos(): Promise<Usuario[]>;
    obtenerUno(id: string): Promise<Usuario>;
    actualizar(id: string, actualizarUsuarioDto: ActualizarUsuarioDto): Promise<Usuario>;
    eliminar(id: string): Promise<import("typeorm").DeleteResult>;
    autenticar(nombre_usuario: string, contraseña: string): Promise<{
        success: boolean;
    }>;
    verificarPalabraSecreta(nombre_usuario: string, palabra_secreta: string): Promise<{
        esValida: boolean;
        id_usuario?: string;
    }>;
}
