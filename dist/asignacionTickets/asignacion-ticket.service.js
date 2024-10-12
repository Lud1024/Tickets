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
exports.AsignacionTicketService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const asignacion_ticket_entity_1 = require("./entities/asignacion-ticket.entity");
let AsignacionTicketService = class AsignacionTicketService {
    constructor(asignacionRepository) {
        this.asignacionRepository = asignacionRepository;
    }
    findAll() {
        return this.asignacionRepository.find({ relations: ['ticket', 'tecnico'] });
    }
    findOne(id) {
        return this.asignacionRepository.findOne({
            where: { id_asignacion: id },
            relations: ['ticket', 'tecnico'],
        });
    }
    create(crearAsignacionDto) {
        const asignacion = this.asignacionRepository.create(crearAsignacionDto);
        return this.asignacionRepository.save(asignacion);
    }
    async update(id, actualizarAsignacionDto) {
        await this.asignacionRepository.update(id, actualizarAsignacionDto);
        return this.asignacionRepository.findOneBy({ id_asignacion: id });
    }
    async remove(id) {
        await this.asignacionRepository.delete(id);
    }
};
exports.AsignacionTicketService = AsignacionTicketService;
exports.AsignacionTicketService = AsignacionTicketService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(asignacion_ticket_entity_1.AsignacionTicket)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AsignacionTicketService);
//# sourceMappingURL=asignacion-ticket.service.js.map