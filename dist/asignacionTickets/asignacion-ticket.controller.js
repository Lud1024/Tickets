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
exports.AsignacionTicketController = void 0;
const common_1 = require("@nestjs/common");
const asignacion_ticket_service_1 = require("./asignacion-ticket.service");
const crear_asignacion_ticket_dto_1 = require("./dto/crear-asignacion-ticket.dto");
const actualizar_asignacion_ticket_dto_1 = require("./dto/actualizar-asignacion-ticket.dto");
let AsignacionTicketController = class AsignacionTicketController {
    constructor(asignacionService) {
        this.asignacionService = asignacionService;
    }
    findAll() {
        return this.asignacionService.findAll();
    }
    findOne(id) {
        return this.asignacionService.findOne(id);
    }
    create(crearAsignacionDto) {
        return this.asignacionService.create(crearAsignacionDto);
    }
    update(id, actualizarAsignacionDto) {
        return this.asignacionService.update(id, actualizarAsignacionDto);
    }
    async remove(id) {
        await this.asignacionService.remove(id);
        return { message: `Registro Eliminado Exitosamente` };
    }
};
exports.AsignacionTicketController = AsignacionTicketController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AsignacionTicketController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AsignacionTicketController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [crear_asignacion_ticket_dto_1.CrearAsignacionTicketDto]),
    __metadata("design:returntype", void 0)
], AsignacionTicketController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, actualizar_asignacion_ticket_dto_1.ActualizarAsignacionTicketDto]),
    __metadata("design:returntype", void 0)
], AsignacionTicketController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AsignacionTicketController.prototype, "remove", null);
exports.AsignacionTicketController = AsignacionTicketController = __decorate([
    (0, common_1.Controller)('asignaciontickets'),
    __metadata("design:paramtypes", [asignacion_ticket_service_1.AsignacionTicketService])
], AsignacionTicketController);
//# sourceMappingURL=asignacion-ticket.controller.js.map