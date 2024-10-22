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
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const usuario_entity_1 = require("./entities/usuario.entity");
const bcrypt = require("bcrypt");
let UsuariosService = class UsuariosService {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    async crear(crearUsuarioDto) {
        const usuario = this.usuarioRepository.create(crearUsuarioDto);
        return await this.usuarioRepository.save(usuario);
    }
    obtenerTodos() {
        return this.usuarioRepository.find();
    }
    obtenerUno(id) {
        return this.usuarioRepository.findOneBy({ id_usuario: id });
    }
    async actualizar(id, actualizarUsuarioDto) {
        const usuario = await this.usuarioRepository.findOneBy({ id_usuario: id });
        if (!usuario) {
            throw new common_1.NotFoundException(`El usuario con ID ${id} no fue encontrado`);
        }
        if (actualizarUsuarioDto.palabra_secreta) {
            const salt = await bcrypt.genSalt();
            actualizarUsuarioDto.palabra_secreta = await bcrypt.hash(actualizarUsuarioDto.palabra_secreta, salt);
        }
        if (actualizarUsuarioDto.contraseña) {
            const salt = await bcrypt.genSalt();
            actualizarUsuarioDto.contraseña = await bcrypt.hash(actualizarUsuarioDto.contraseña, salt);
        }
        await this.usuarioRepository.update(id, actualizarUsuarioDto);
        return this.usuarioRepository.findOneBy({ id_usuario: id });
    }
    eliminar(id) {
        return this.usuarioRepository.delete(id);
    }
    async autenticar(nombre_usuario, contraseña) {
        const usuario = await this.usuarioRepository.findOneBy({ nombre_usuario });
        if (!usuario) {
            throw new common_1.NotFoundException(`El usuario con nombre ${nombre_usuario} no existe`);
        }
        const esMatch = await bcrypt.compare(contraseña, usuario.contraseña);
        return { success: esMatch };
    }
    async verificarPalabraSecreta(nombre_usuario, palabra_secreta) {
        const usuario = await this.usuarioRepository.findOneBy({ nombre_usuario });
        if (!usuario) {
            throw new common_1.NotFoundException(`El usuario con nombre ${nombre_usuario} no existe.`);
        }
        const esValida = await bcrypt.compare(palabra_secreta, usuario.palabra_secreta);
        if (esValida) {
            return { esValida: true, id_usuario: usuario.id_usuario };
        }
        return { esValida: false };
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usuario_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map