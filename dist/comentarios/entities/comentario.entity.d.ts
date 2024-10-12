import { Ticket } from '../../tickets/entities/ticket.entity';
import { Usuario } from '../../usuarios/entities/usuario.entity';
export declare class Comentario {
    id_comentario: number;
    ticket: Ticket;
    id_ticket: number;
    usuario: Usuario;
    id_usuario: string;
    contenido: string;
    fecha_comentario: Date;
}
