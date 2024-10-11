// asignacionTickets/asignacion-ticket.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsignacionTicket } from './entities/asignacion-ticket.entity';
import { AsignacionTicketService } from './asignacion-ticket.service';
import { AsignacionTicketController } from './asignacion-ticket.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AsignacionTicket])],
  controllers: [AsignacionTicketController],
  providers: [AsignacionTicketService],
})
export class AsignacionTicketModule {}
