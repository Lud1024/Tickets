import { TicketService } from './ticket.service';
import { CrearTicketDto } from './dto/crear-ticket.dto';
import { ActualizarTicketDto } from './dto/actualizar-ticket.dto';
import { Ticket } from './entities/ticket.entity';
export declare class TicketController {
    private readonly ticketService;
    constructor(ticketService: TicketService);
    findAll(): Promise<Ticket[]>;
    findOne(id: number): Promise<Ticket>;
    create(crearTicketDto: CrearTicketDto): Promise<Ticket>;
    update(id: number, actualizarTicketDto: ActualizarTicketDto): Promise<Ticket>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
