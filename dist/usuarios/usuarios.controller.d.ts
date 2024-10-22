import { UsuariosService } from './usuarios.service';
import { CrearUsuarioDto } from './dto/crear-usuario.dto';
import { ActualizarUsuarioDto } from './dto/actualizar-usuario.dto';
import { RecoveryUsuarioDto } from './dto/recovery.dto';
import { LoginUsuarioDto } from './dto/login.dto';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    crear(crearUsuarioDto: CrearUsuarioDto): Promise<import("./entities/usuario.entity").Usuario>;
    obtenerTodos(): Promise<import("./entities/usuario.entity").Usuario[]>;
    obtenerUno(id: string): Promise<import("./entities/usuario.entity").Usuario>;
    actualizar(id: string, actualizarUsuarioDto: ActualizarUsuarioDto): Promise<import("./entities/usuario.entity").Usuario>;
    eliminar(id: string): Promise<{
        message: string;
    }>;
    login(loginUsuarioDto: LoginUsuarioDto): Promise<{
        success: boolean;
        message: string;
    }>;
    recovery(recoveryUsuarioDto: RecoveryUsuarioDto): Promise<{
        success: boolean;
        message: string;
        uuid: string;
    }>;
}
