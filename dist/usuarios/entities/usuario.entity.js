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
exports.Usuario = void 0;
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
let Usuario = class Usuario {
    async encriptarDatos() {
        const salt = await bcrypt.genSalt();
        this.palabra_secreta = await bcrypt.hash(this.palabra_secreta, salt);
        this.contraseña = await bcrypt.hash(this.contraseña, salt);
    }
};
exports.Usuario = Usuario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Usuario.prototype, "id_usuario", void 0);
__decorate([
    (0, typeorm_1.Column)('text', {
        nullable: false,
    }),
    __metadata("design:type", String)
], Usuario.prototype, "nombre_usuario", void 0);
__decorate([
    (0, typeorm_1.Column)('text', {
        unique: true,
        nullable: false,
    }),
    __metadata("design:type", String)
], Usuario.prototype, "correo_electronico_usuario", void 0);
__decorate([
    (0, typeorm_1.Column)('text', {
        nullable: true,
    }),
    __metadata("design:type", String)
], Usuario.prototype, "rol_usuario", void 0);
__decorate([
    (0, typeorm_1.Column)('text', {
        nullable: false,
    }),
    __metadata("design:type", String)
], Usuario.prototype, "palabra_secreta", void 0);
__decorate([
    (0, typeorm_1.Column)('text', {
        nullable: false,
    }),
    __metadata("design:type", String)
], Usuario.prototype, "contrase\u00F1a", void 0);
__decorate([
    (0, typeorm_1.Column)('text', {
        nullable: true,
    }),
    __metadata("design:type", String)
], Usuario.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', {
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], Usuario.prototype, "fecha_creacion", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Usuario.prototype, "encriptarDatos", null);
exports.Usuario = Usuario = __decorate([
    (0, typeorm_1.Entity)()
], Usuario);
//# sourceMappingURL=usuario.entity.js.map