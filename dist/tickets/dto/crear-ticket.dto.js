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
exports.CrearTicketDto = void 0;
const class_validator_1 = require("class-validator");
class CrearTicketDto {
}
exports.CrearTicketDto = CrearTicketDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CrearTicketDto.prototype, "titulo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CrearTicketDto.prototype, "descripcion", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['Baja', 'Media', 'Alta']),
    __metadata("design:type", String)
], CrearTicketDto.prototype, "prioridad", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['Abierto', 'En Proceso', 'Cerrado']),
    __metadata("design:type", String)
], CrearTicketDto.prototype, "estado", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CrearTicketDto.prototype, "id_usuario_creador", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CrearTicketDto.prototype, "id_tecnico_asignado", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CrearTicketDto.prototype, "id_departamento", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CrearTicketDto.prototype, "id_categoria_ticket", void 0);
//# sourceMappingURL=crear-ticket.dto.js.map