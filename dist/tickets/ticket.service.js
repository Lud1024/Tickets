"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ticket_entity_1 = require("./entities/ticket.entity");
let TicketService = class TicketService {
    constructor(ticketRepository) {
        this.ticketRepository = ticketRepository;
    }
    findAll() {
        return this.ticketRepository.find({ relations: ['usuario_creador', 'tecnico_asignado', 'departamento', 'categoria_ticket'] });
    }
    findOne(id) {
        return this.ticketRepository.findOne({
            where: { id_ticket: id },
            relations: ['usuario_creador', 'tecnico_asignado', 'departamento', 'categoria_ticket'],
        });
    }
    async create(crearTicketDto) {
        const ticket = new ticket_entity_1.Ticket();
        ticket.titulo = crearTicketDto.titulo;
        ticket.descripcion = crearTicketDto.descripcion;
        ticket.prioridad = crearTicketDto.prioridad;
        ticket.estado = crearTicketDto.estado;
        ticket.id_usuario_creador = crearTicketDto.id_usuario_creador;
        ticket.id_tecnico_asignado = crearTicketDto.id_tecnico_asignado;
        ticket.id_departamento = crearTicketDto.id_departamento;
        ticket.id_categoria_ticket = crearTicketDto.id_categoria_ticket;
        return await this.ticketRepository.save(ticket);
    }
    async update(id, actualizarTicketDto) {
        await this.ticketRepository.update(id, actualizarTicketDto);
        return this.ticketRepository.findOneBy({ id_ticket: id });
    }
    async remove(id) {
        await this.ticketRepository.delete(id);
    }
};
exports.TicketService = TicketService;
exports.TicketService = TicketService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ticket_entity_1.Ticket)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TicketService);
//# sourceMappingURL=ticket.service.js.map