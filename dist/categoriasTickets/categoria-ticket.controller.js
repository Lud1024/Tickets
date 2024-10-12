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
exports.CategoriaTicketController = void 0;
const common_1 = require("@nestjs/common");
const categoria_ticket_service_1 = require("./categoria-ticket.service");
const crear_categoria_ticket_dto_1 = require("./dto/crear-categoria-ticket.dto");
const actualizar_categoria_ticket_dto_1 = require("./dto/actualizar-categoria-ticket.dto");
let CategoriaTicketController = class CategoriaTicketController {
    constructor(categoriaTicketService) {
        this.categoriaTicketService = categoriaTicketService;
    }
    findAll() {
        return this.categoriaTicketService.findAll();
    }
    findOne(id) {
        return this.categoriaTicketService.findOne(id);
    }
    create(crearCategoriaTicketDto) {
        return this.categoriaTicketService.create(crearCategoriaTicketDto);
    }
    update(id, actualizarCategoriaTicketDto) {
        return this.categoriaTicketService.update(id, actualizarCategoriaTicketDto);
    }
    async remove(id) {
        await this.categoriaTicketService.remove(id);
        return { message: `Registro Eliminado Exitosamente` };
    }
};
exports.CategoriaTicketController = CategoriaTicketController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoriaTicketController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoriaTicketController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [crear_categoria_ticket_dto_1.CrearCategoriaTicketDto]),
    __metadata("design:returntype", Promise)
], CategoriaTicketController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, actualizar_categoria_ticket_dto_1.ActualizarCategoriaTicketDto]),
    __metadata("design:returntype", Promise)
], CategoriaTicketController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoriaTicketController.prototype, "remove", null);
exports.CategoriaTicketController = CategoriaTicketController = __decorate([
    (0, common_1.Controller)('categoriastickets'),
    __metadata("design:paramtypes", [categoria_ticket_service_1.CategoriaTicketService])
], CategoriaTicketController);
//# sourceMappingURL=categoria-ticket.controller.js.map