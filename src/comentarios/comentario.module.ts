// comentarios/comentario.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comentario } from './entities/comentario.entity';
import { ComentarioService } from './comentario.service';
import { ComentarioController } from './comentario.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Comentario])],
  controllers: [ComentarioController],
  providers: [ComentarioService],
})
export class ComentarioModule {}
