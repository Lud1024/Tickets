import { Repository } from 'typeorm';
import { Comentario } from './entities/comentario.entity';
import { CrearComentarioDto } from './dto/crear-comentario.dto';
import { ActualizarComentarioDto } from './dto/actualizar-comentario.dto';
export declare class ComentarioService {
    private readonly comentarioRepository;
    constructor(comentarioRepository: Repository<Comentario>);
    findAll(): Promise<Comentario[]>;
    findOne(id: number): Promise<Comentario>;
    create(crearComentarioDto: CrearComentarioDto): Promise<Comentario>;
    update(id: number, actualizarComentarioDto: ActualizarComentarioDto): Promise<Comentario>;
    remove(id: number): Promise<void>;
}
