import { Repository } from 'typeorm';
import { CategoriaTicket } from './entities/categoria-ticket.entity';
import { CrearCategoriaTicketDto } from './dto/crear-categoria-ticket.dto';
import { ActualizarCategoriaTicketDto } from './dto/actualizar-categoria-ticket.dto';
export declare class CategoriaTicketService {
    private readonly categoriaTicketRepository;
    constructor(categoriaTicketRepository: Repository<CategoriaTicket>);
    findAll(): Promise<CategoriaTicket[]>;
    findOne(id: number): Promise<CategoriaTicket>;
    create(crearCategoriaTicketDto: CrearCategoriaTicketDto): Promise<CategoriaTicket>;
    update(id: number, actualizarCategoriaTicketDto: ActualizarCategoriaTicketDto): Promise<CategoriaTicket>;
    remove(id: number): Promise<void>;
}
