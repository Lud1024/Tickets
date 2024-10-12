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
exports.DepartamentosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const departamento_entity_1 = require("./entities/departamento.entity");
let DepartamentosService = class DepartamentosService {
    constructor(departamentoRepository) {
        this.departamentoRepository = departamentoRepository;
    }
    findAll() {
        return this.departamentoRepository.find();
    }
    findOne(id) {
        return this.departamentoRepository.findOneBy({ id_departamento: id });
    }
    create(crearDepartamentoDto) {
        const departamento = new departamento_entity_1.Departamento();
        departamento.nombre_departamento = crearDepartamentoDto.nombre_departamento;
        departamento.descripcion = crearDepartamentoDto.descripcion || '';
        return this.departamentoRepository.save(departamento);
    }
    async update(id, actualizarDepartamentoDto) {
        const departamento = await this.departamentoRepository.findOneBy({ id_departamento: id });
        if (!departamento) {
            throw new Error('El departamento no existe');
        }
        if (actualizarDepartamentoDto.nombre_departamento) {
            departamento.nombre_departamento = actualizarDepartamentoDto.nombre_departamento;
        }
        if (actualizarDepartamentoDto.descripcion) {
            departamento.descripcion = actualizarDepartamentoDto.descripcion;
        }
        return this.departamentoRepository.save(departamento);
    }
    async remove(id) {
        await this.departamentoRepository.delete(id);
    }
};
exports.DepartamentosService = DepartamentosService;
exports.DepartamentosService = DepartamentosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(departamento_entity_1.Departamento)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DepartamentosService);
//# sourceMappingURL=departamentos.service.js.map