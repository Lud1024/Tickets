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

  // **Actualización de un usuario con encriptación de contraseña y palabra secreta**
  async actualizar(id: string, actualizarUsuarioDto: ActualizarUsuarioDto) {
    const usuario = await this.usuarioRepository.findOneBy({ id_usuario: id });

    if (!usuario) {
      throw new NotFoundException(`El usuario con ID ${id} no fue encontrado`);
    }

    // **Encriptar la palabra secreta y la contraseña si se proporcionan en la actualización**
    if (actualizarUsuarioDto.palabra_secreta) {
      const salt = await bcrypt.genSalt();
      actualizarUsuarioDto.palabra_secreta = await bcrypt.hash(actualizarUsuarioDto.palabra_secreta, salt);
    }

    if (actualizarUsuarioDto.contraseña) {
      const salt = await bcrypt.genSalt();
      actualizarUsuarioDto.contraseña = await bcrypt.hash(actualizarUsuarioDto.contraseña, salt);
    }

    // **Actualizar los datos del usuario**
    await this.usuarioRepository.update(id, actualizarUsuarioDto);
    return this.usuarioRepository.findOneBy({ id_usuario: id });
  }

  // Eliminar un usuario
  eliminar(id: string) {
    return this.usuarioRepository.delete(id);
  }

  // Método para autenticar al usuario
  async autenticar(nombre_usuario: string, contraseña: string): Promise<{ success: boolean }> {
    const usuario = await this.usuarioRepository.findOneBy({ nombre_usuario });

    if (!usuario) {
      throw new NotFoundException(`El usuario con nombre ${nombre_usuario} no existe`);
    }

    // **Comparar la contraseña proporcionada con la almacenada**
    const esMatch = await bcrypt.compare(contraseña, usuario.contraseña);
    return { success: esMatch };
  }

  // Verificar la palabra secreta para la recuperación de contraseña
  async verificarPalabraSecreta(nombre_usuario: string, palabra_secreta: string): Promise<{ esValida: boolean, id_usuario?: string }> {
    const usuario = await this.usuarioRepository.findOneBy({ nombre_usuario });

    if (!usuario) {
      throw new NotFoundException(`El usuario con nombre ${nombre_usuario} no existe.`);
    }

    // **Comparar la palabra secreta encriptada**
    const esValida = await bcrypt.compare(palabra_secreta, usuario.palabra_secreta);

    if (esValida) {
      return { esValida: true, id_usuario: usuario.id_usuario };
    }

    return { esValida: false };
  }
}
