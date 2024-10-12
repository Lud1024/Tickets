import { AsignacionTicketService } from './asignacion-ticket.service';
import { CrearAsignacionTicketDto } from './dto/crear-asignacion-ticket.dto';
import { ActualizarAsignacionTicketDto } from './dto/actualizar-asignacion-ticket.dto';
export declare class AsignacionTicketController {
    private readonly asignacionService;
    constructor(asignacionService: AsignacionTicketService);
    findAll(): Promise<import("./entities/asignacion-ticket.entity").AsignacionTicket[]>;
    findOne(id: number): Promise<import("./entities/asignacion-ticket.entity").AsignacionTicket>;
    create(crearAsignacionDto: CrearAsignacionTicketDto): Promise<import("./entities/asignacion-ticket.entity").AsignacionTicket>;
    update(id: number, actualizarAsignacionDto: ActualizarAsignacionTicketDto): Promise<import("./entities/asignacion-ticket.entity").AsignacionTicket>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
