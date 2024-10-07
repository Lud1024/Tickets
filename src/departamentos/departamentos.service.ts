// departamentos/departamentos.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Departamento } from './entities/departamento.entity';
import { CrearDepartamentoDto } from './dto/crear-departamento.dto';
import { ActualizarDepartamentoDto } from './dto/actualizar-departamento.dto';

@Injectable()
export class DepartamentosService {
  constructor(
    @InjectRepository(Departamento)
    private readonly departamentoRepository: Repository<Departamento>,
  ) {}

  findAll(): Promise<Departamento[]> {
    return this.departamentoRepository.find();
  }

  findOne(id: number): Promise<Departamento> {
    return this.departamentoRepository.findOneBy({ id_departamento: id });
  }

  create(crearDepartamentoDto: CrearDepartamentoDto): Promise<Departamento> {
    // Convertir el DTO en la entidad Departamento
    const departamento = new Departamento();
    departamento.nombre_departamento = crearDepartamentoDto.nombre_departamento;
    departamento.descripcion = crearDepartamentoDto.descripcion || '';
    return this.departamentoRepository.save(departamento);
  }

  async update(id: number, actualizarDepartamentoDto: ActualizarDepartamentoDto): Promise<Departamento> {
    // Buscar el departamento existente
    const departamento = await this.departamentoRepository.findOneBy({ id_departamento: id });

    // Verificar si existe
    if (!departamento) {
      throw new Error('El departamento no existe');
    }

    // Actualizar los campos desde el DTO
    if (actualizarDepartamentoDto.nombre_departamento) {
      departamento.nombre_departamento = actualizarDepartamentoDto.nombre_departamento;
    }
    if (actualizarDepartamentoDto.descripcion) {
      departamento.descripcion = actualizarDepartamentoDto.descripcion;
    }

    return this.departamentoRepository.save(departamento);
  }

  async remove(id: number): Promise<void> {
    await this.departamentoRepository.delete(id);
  }
}
