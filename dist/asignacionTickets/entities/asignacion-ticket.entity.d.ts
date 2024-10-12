import { Ticket } from '../../tickets/entities/ticket.entity';
import { Usuario } from '../../usuarios/entities/usuario.entity';
export declare class AsignacionTicket {
    id_asignacion: number;
    ticket: Ticket;
    id_ticket: number;
    tecnico: Usuario;
    id_tecnico: string;
    fecha_asignacion: Date;
    razon_asignacion: string;
}
