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
exports.UsuariosController = void 0;
const common_1 = require("@nestjs/common");
const usuarios_service_1 = require("./usuarios.service");
const crear_usuario_dto_1 = require("./dto/crear-usuario.dto");
const actualizar_usuario_dto_1 = require("./dto/actualizar-usuario.dto");
const recovery_dto_1 = require("./dto/recovery.dto");
const login_dto_1 = require("./dto/login.dto");
let UsuariosController = class UsuariosController {
    constructor(usuariosService) {
        this.usuariosService = usuariosService;
    }
    crear(crearUsuarioDto) {
        return this.usuariosService.crear(crearUsuarioDto);
    }
    obtenerTodos() {
        return this.usuariosService.obtenerTodos();
    }
    obtenerUno(id) {
        return this.usuariosService.obtenerUno(id);
    }
    actualizar(id, actualizarUsuarioDto) {
        return this.usuariosService.actualizar(id, actualizarUsuarioDto);
    }
    async eliminar(id) {
        await this.usuariosService.eliminar(id);
        return { message: `Registro eliminado exitosamente` };
    }
    async login(loginUsuarioDto) {
        const { nombre_usuario, contraseña } = loginUsuarioDto;
        const result = await this.usuariosService.autenticar(nombre_usuario, contraseña);
        if (result.success) {
            return { success: true, message: 'Autenticación exitosa' };
        }
        else {
            throw new common_1.NotFoundException('Credenciales incorrectas');
        }
    }
    async recovery(recoveryUsuarioDto) {
        const { nombre_usuario, palabra_secreta } = recoveryUsuarioDto;
        const { esValida, id_usuario } = await this.usuariosService.verificarPalabraSecreta(nombre_usuario, palabra_secreta);
        if (esValida) {
            return { success: true, message: 'Palabra secreta correcta, puedes continuar con la recuperación.', uuid: id_usuario };
        }
        else {
            throw new common_1.NotFoundException('La palabra secreta es incorrecta o el usuario no existe.');
        }
    }
};
exports.UsuariosController = UsuariosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [crear_usuario_dto_1.CrearUsuarioDto]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "crear", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "obtenerTodos", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "obtenerUno", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, actualizar_usuario_dto_1.ActualizarUsuarioDto]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "eliminar", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginUsuarioDto]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('recovery'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [recovery_dto_1.RecoveryUsuarioDto]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "recovery", null);
exports.UsuariosController = UsuariosController = __decorate([
    (0, common_1.Controller)('usuarios'),
    __metadata("design:paramtypes", [usuarios_service_1.UsuariosService])
], UsuariosController);
//# sourceMappingURL=usuarios.controller.js.map