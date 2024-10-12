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
exports.DepartamentosController = void 0;
const common_1 = require("@nestjs/common");
const departamentos_service_1 = require("./departamentos.service");
const crear_departamento_dto_1 = require("./dto/crear-departamento.dto");
const actualizar_departamento_dto_1 = require("./dto/actualizar-departamento.dto");
let DepartamentosController = class DepartamentosController {
    constructor(departamentosService) {
        this.departamentosService = departamentosService;
    }
    findAll() {
        return this.departamentosService.findAll();
    }
    findOne(id) {
        return this.departamentosService.findOne(id);
    }
    create(crearDepartamentoDto) {
        return this.departamentosService.create(crearDepartamentoDto);
    }
    update(id, actualizarDepartamentoDto) {
        return this.departamentosService.update(id, actualizarDepartamentoDto);
    }
    async remove(id) {
        await this.departamentosService.remove(id);
        return { message: `Registro eliminado exitosamente` };
    }
};
exports.DepartamentosController = DepartamentosController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DepartamentosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DepartamentosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [crear_departamento_dto_1.CrearDepartamentoDto]),
    __metadata("design:returntype", Promise)
], DepartamentosController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, actualizar_departamento_dto_1.ActualizarDepartamentoDto]),
    __metadata("design:returntype", Promise)
], DepartamentosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DepartamentosController.prototype, "remove", null);
exports.DepartamentosController = DepartamentosController = __decorate([
    (0, common_1.Controller)('departamentos'),
    __metadata("design:paramtypes", [departamentos_service_1.DepartamentosService])
], DepartamentosController);
//# sourceMappingURL=departamentos.controller.js.map