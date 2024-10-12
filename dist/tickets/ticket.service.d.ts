import { Repository } from 'typeorm';
import { Ticket } from './entities/ticket.entity';
import { CrearTicketDto } from './dto/crear-ticket.dto';
import { ActualizarTicketDto } from './dto/actualizar-ticket.dto';
export declare class TicketService {
    private readonly ticketRepository;
    constructor(ticketRepository: Repository<Ticket>);
    findAll(): Promise<Ticket[]>;
    findOne(id: number): Promise<Ticket>;
    create(crearTicketDto: CrearTicketDto): Promise<Ticket>;
    update(id: number, actualizarTicketDto: ActualizarTicketDto): Promise<Ticket>;
    remove(id: number): Promise<void>;
}
