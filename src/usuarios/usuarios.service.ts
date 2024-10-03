import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { CrearUsuarioDto } from './dto/crear-usuario.dto';
import { ActualizarUsuarioDto } from './dto/actualizar-usuario.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  // Crear un nuevo usuario
  async crear(crearUsuarioDto: CrearUsuarioDto) {
    const usuario = this.usuarioRepository.create(crearUsuarioDto);
    return await this.usuarioRepository.save(usuario);
  }

  // Obtener todos los usuarios
  obtenerTodos() {
    return this.usuarioRepository.find();
  }

  // Obtener un usuario por ID
  obtenerUno(id: string) {
    return this.usuarioRepository.findOneBy({ id_usuario: id });
  }

  // Actualizar un usuario existente
  async actualizar(id: string, actualizarUsuarioDto: ActualizarUsuarioDto) {
    await this.usuarioRepository.update(id, actualizarUsuarioDto);
    return this.usuarioRepository.findOneBy({ id_usuario: id });
  }

  // Eliminar un usuario
  eliminar(id: string) {
    return this.usuarioRepository.delete(id);
  }

  // Método para autenticar al usuario
  async autenticar(nombre_usuario: string, contraseña: string): Promise<{ success: boolean }> {
    // Buscar al usuario por nombre de usuario
    const usuario = await this.usuarioRepository.findOneBy({ nombre_usuario });

    if (!usuario) {
      // Si no existe el usuario, devolver false
      throw new NotFoundException(`El usuario con nombre ${nombre_usuario} no existe`);
    }

    // Comparar la contraseña proporcionada con la almacenada
    const esMatch = await bcrypt.compare(contraseña, usuario.contraseña);
    return { success: esMatch };
  }
}
