// historialCambios/historial-cambio.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistorialCambio } from './entities/historial-cambio.entity';
import { HistorialCambioService } from './historial-cambio.service';
import { HistorialCambioController } from './historial-cambio.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HistorialCambio])],
  controllers: [HistorialCambioController],
  providers: [HistorialCambioService],
})
export class HistorialCambioModule {}
