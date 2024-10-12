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
exports.Ticket = void 0;
const typeorm_1 = require("typeorm");
const usuario_entity_1 = require("../../usuarios/entities/usuario.entity");
const departamento_entity_1 = require("../../departamentos/entities/departamento.entity");
const categoria_ticket_entity_1 = require("../../categoriasTickets/entities/categoria-ticket.entity");
let Ticket = class Ticket {
};
exports.Ticket = Ticket;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Ticket.prototype, "id_ticket", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Ticket.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Ticket.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: ['Baja', 'Media', 'Alta'],
        default: 'Media',
    }),
    __metadata("design:type", String)
], Ticket.prototype, "prioridad", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: ['Abierto', 'En Proceso', 'Cerrado'],
        default: 'Abierto',
    }),
    __metadata("design:type", String)
], Ticket.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Ticket.prototype, "fecha_creacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Ticket.prototype, "fecha_cierre", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, usuario => usuario.id_usuario),
    (0, typeorm_1.JoinColumn)({ name: 'id_usuario_creador' }),
    __metadata("design:type", usuario_entity_1.Usuario)
], Ticket.prototype, "usuario_creador", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], Ticket.prototype, "id_usuario_creador", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, usuario => usuario.id_usuario),
    (0, typeorm_1.JoinColumn)({ name: 'id_tecnico_asignado' }),
    __metadata("design:type", usuario_entity_1.Usuario)
], Ticket.prototype, "tecnico_asignado", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], Ticket.prototype, "id_tecnico_asignado", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => departamento_entity_1.Departamento, departamento => departamento.id_departamento),
    (0, typeorm_1.JoinColumn)({ name: 'id_departamento' }),
    __metadata("design:type", departamento_entity_1.Departamento)
], Ticket.prototype, "departamento", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Ticket.prototype, "id_departamento", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => categoria_ticket_entity_1.CategoriaTicket, categoriaTicket => categoriaTicket.id_categoria_ticket),
    (0, typeorm_1.JoinColumn)({ name: 'id_categoria_ticket' }),
    __metadata("design:type", categoria_ticket_entity_1.CategoriaTicket)
], Ticket.prototype, "categoria_ticket", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Ticket.prototype, "id_categoria_ticket", void 0);
exports.Ticket = Ticket = __decorate([
    (0, typeorm_1.Entity)('tickets')
], Ticket);
//# sourceMappingURL=ticket.entity.js.map