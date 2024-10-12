import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Departamento } from '../../departamentos/entities/departamento.entity';
import { CategoriaTicket } from '../../categoriasTickets/entities/categoria-ticket.entity';
export declare class Ticket {
    id_ticket: number;
    titulo: string;
    descripcion: string;
    prioridad: string;
    estado: string;
    fecha_creacion: Date;
    fecha_cierre: Date;
    usuario_creador: Usuario;
    id_usuario_creador: string;
    tecnico_asignado: Usuario;
    id_tecnico_asignado: string;
    departamento: Departamento;
    id_departamento: number;
    categoria_ticket: CategoriaTicket;
    id_categoria_ticket: number;
}
