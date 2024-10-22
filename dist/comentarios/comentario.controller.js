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
exports.ComentarioController = void 0;
const common_1 = require("@nestjs/common");
const comentario_service_1 = require("./comentario.service");
const crear_comentario_dto_1 = require("./dto/crear-comentario.dto");
const actualizar_comentario_dto_1 = require("./dto/actualizar-comentario.dto");
let ComentarioController = class ComentarioController {
    constructor(comentarioService) {
        this.comentarioService = comentarioService;
    }
    findAll() {
        return this.comentarioService.findAll();
    }
    findOne(id) {
        return this.comentarioService.findOne(id);
    }
    create(crearComentarioDto) {
        return this.comentarioService.create(crearComentarioDto);
    }
    update(id, actualizarComentarioDto) {
        return this.comentarioService.update(id, actualizarComentarioDto);
    }
    async remove(id) {
        await this.comentarioService.remove(id);
        return { message: `Registro Eliminado Exitosamente` };
    }
};
exports.ComentarioController = ComentarioController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ComentarioController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ComentarioController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [crear_comentario_dto_1.CrearComentarioDto]),
    __metadata("design:returntype", void 0)
], ComentarioController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, actualizar_comentario_dto_1.ActualizarComentarioDto]),
    __metadata("design:returntype", void 0)
], ComentarioController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ComentarioController.prototype, "remove", null);
exports.ComentarioController = ComentarioController = __decorate([
    (0, common_1.Controller)('comentarios'),
    __metadata("design:paramtypes", [comentario_service_1.ComentarioService])
], ComentarioController);
//# sourceMappingURL=comentario.controller.js.map