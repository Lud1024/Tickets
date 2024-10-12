// comentarios/comentario.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comentario } from './entities/comentario.entity';
import { CrearComentarioDto } from './dto/crear-comentario.dto';
import { ActualizarComentarioDto } from './dto/actualizar-comentario.dto';
import { HistorialCambioService } from '../historialCambios/historial-cambio.service';  // Importamos el servicio del historial de cambios

@Injectable()
export class ComentarioService {
  constructor(
    @InjectRepository(Comentario)
    private readonly comentarioRepository: Repository<Comentario>,
    private readonly historialCambioService: HistorialCambioService,  // Inyectamos el servicio del historial de cambios
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

  async create(crearComentarioDto: CrearComentarioDto): Promise<Comentario> {
    const comentario = this.comentarioRepository.create(crearComentarioDto);
    return this.comentarioRepository.save(comentario);
  }

  async update(id: number, actualizarComentarioDto: ActualizarComentarioDto, usuarioId: string): Promise<Comentario> {
    const comentario = await this.comentarioRepository.findOneBy({ id_comentario: id });

    if (comentario.contenido !== actualizarComentarioDto.contenido) {
      await this.historialCambioService.create({
        id_ticket: comentario.id_ticket,
        id_usuario: usuarioId,
        campo_modificado: 'contenido',
        valor_anterior: comentario.contenido,
        valor_nuevo: actualizarComentarioDto.contenido,
      });
    }

    await this.comentarioRepository.update(id, actualizarComentarioDto);
    return this.comentarioRepository.findOneBy({ id_comentario: id });
  }

  async remove(id: number): Promise<void> {
    await this.comentarioRepository.delete(id);
  }
}
