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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsignacionTicket = void 0;
const typeorm_1 = require("typeorm");
const ticket_entity_1 = require("../../tickets/entities/ticket.entity");
const usuario_entity_1 = require("../../usuarios/entities/usuario.entity");
let AsignacionTicket = class AsignacionTicket {
};
exports.AsignacionTicket = AsignacionTicket;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AsignacionTicket.prototype, "id_asignacion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ticket_entity_1.Ticket, ticket => ticket.id_ticket),
    (0, typeorm_1.JoinColumn)({ name: 'id_ticket' }),
    __metadata("design:type", ticket_entity_1.Ticket)
], AsignacionTicket.prototype, "ticket", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], AsignacionTicket.prototype, "id_ticket", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, usuario => usuario.id_usuario),
    (0, typeorm_1.JoinColumn)({ name: 'id_tecnico' }),
    __metadata("design:type", usuario_entity_1.Usuario)
], AsignacionTicket.prototype, "tecnico", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], AsignacionTicket.prototype, "id_tecnico", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], AsignacionTicket.prototype, "fecha_asignacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], AsignacionTicket.prototype, "razon_asignacion", void 0);
exports.AsignacionTicket = AsignacionTicket = __decorate([
    (0, typeorm_1.Entity)('asignaciontickets')
], AsignacionTicket);
//# sourceMappingURL=asignacion-ticket.entity.js.map