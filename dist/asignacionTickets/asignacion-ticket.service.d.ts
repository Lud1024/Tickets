import { Repository } from 'typeorm';
import { AsignacionTicket } from './entities/asignacion-ticket.entity';
import { CrearAsignacionTicketDto } from './dto/crear-asignacion-ticket.dto';
import { ActualizarAsignacionTicketDto } from './dto/actualizar-asignacion-ticket.dto';
export declare class AsignacionTicketService {
    private readonly asignacionRepository;
    constructor(asignacionRepository: Repository<AsignacionTicket>);
    findAll(): Promise<AsignacionTicket[]>;
    findOne(id: number): Promise<AsignacionTicket>;
    create(crearAsignacionDto: CrearAsignacionTicketDto): Promise<AsignacionTicket>;
    update(id: number, actualizarAsignacionDto: ActualizarAsignacionTicketDto): Promise<AsignacionTicket>;
    remove(id: number): Promise<void>;
}
