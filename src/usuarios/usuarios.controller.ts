import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CrearUsuarioDto } from './dto/crear-usuario.dto';
import { ActualizarUsuarioDto } from './dto/actualizar-usuario.dto';

// Importar el DTO para la autenticación
import { LoginUsuarioDto } from './dto/login.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  // Ruta para crear un nuevo usuario
  @Post()
  crear(@Body() crearUsuarioDto: CrearUsuarioDto) {
    return this.usuariosService.crear(crearUsuarioDto);
  }

  // Obtener todos los usuarios
  @Get()
  obtenerTodos() {
    return this.usuariosService.obtenerTodos();
  }

  // Obtener un usuario específico por ID
  @Get(':id')
  obtenerUno(@Param('id') id: string) {
    return this.usuariosService.obtenerUno(id);
  }

  // Actualizar un usuario por ID
  @Patch(':id')
  actualizar(@Param('id') id: string, @Body() actualizarUsuarioDto: ActualizarUsuarioDto) {
    return this.usuariosService.actualizar(id, actualizarUsuarioDto);
  }

  // Eliminar un usuario por ID
  @Delete(':id')
  async eliminar(@Param('id') id: string) {
    await this.usuariosService.eliminar(id);
  return { message: `Registro eliminado exitosamente` };
  }

  // Nueva ruta para la autenticación de usuarios
  @Post('login')
  async login(@Body() loginUsuarioDto: LoginUsuarioDto) {
    const { nombre_usuario, contraseña } = loginUsuarioDto;

    const result = await this.usuariosService.autenticar(nombre_usuario, contraseña);
    if (result.success) {
      return { success: true, message: 'Autenticación exitosa' };
    } else {
      throw new NotFoundException('Credenciales incorrectas');
    }
  }
}
