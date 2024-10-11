// comentarios/comentario.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comentario } from './entities/comentario.entity';
import { CrearComentarioDto } from './dto/crear-comentario.dto';
import { ActualizarComentarioDto } from './dto/actualizar-comentario.dto';

@Injectable()
export class ComentarioService {
  constructor(
    @InjectRepository(Comentario)
    private readonly comentarioRepository: Repository<Comentario>,
  ) {}

  findAll(): Promise<Comentario[]> {
    return this.comentarioRepository.find({ relations: ['ticket', 'usuario'] });
  }

  findOne(id: number): Promise<Comentario> {
    return this.comentarioRepository.findOne({
      where: { id_comentario: id },
      relations: ['ticket', 'usuario'],
    });
  }

  create(crearComentarioDto: CrearComentarioDto): Promise<Comentario> {
    const comentario = this.comentarioRepository.create(crearComentarioDto);
    return this.comentarioRepository.save(comentario);
  }

  async update(id: number, actualizarComentarioDto: ActualizarComentarioDto): Promise<Comentario> {
    await this.comentarioRepository.update(id, actualizarComentarioDto);
    return this.comentarioRepository.findOneBy({ id_comentario: id });
  }

  async remove(id: number): Promise<void> {
    await this.comentarioRepository.delete(id);
  }
}
