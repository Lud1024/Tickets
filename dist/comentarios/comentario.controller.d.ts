import { ComentarioService } from './comentario.service';
import { CrearComentarioDto } from './dto/crear-comentario.dto';
import { ActualizarComentarioDto } from './dto/actualizar-comentario.dto';
export declare class ComentarioController {
    private readonly comentarioService;
    constructor(comentarioService: ComentarioService);
    findAll(): Promise<import("./entities/comentario.entity").Comentario[]>;
    findOne(id: number): Promise<import("./entities/comentario.entity").Comentario>;
    create(crearComentarioDto: CrearComentarioDto): Promise<import("./entities/comentario.entity").Comentario>;
    update(id: number, actualizarComentarioDto: ActualizarComentarioDto): Promise<import("./entities/comentario.entity").Comentario>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
