import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config'; 
import { UsuariosModule } from './usuarios/usuarios.module';
import { DepartamentosModule } from './departamentos/departamentos.module'; 
import { CategoriaTicketModule } from './categoriasTickets/categoria-ticket.module';
import { TicketModule } from './tickets/ticket.module';
import { AsignacionTicketModule } from './asignacionTickets/asignacion-ticket.module';
import { ComentarioModule } from './comentarios/comentario.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsuariosModule,
    DepartamentosModule,
    CategoriaTicketModule,
    TicketModule,
    AsignacionTicketModule,
    ComentarioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
