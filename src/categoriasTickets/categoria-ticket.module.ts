// categoriasTickets/categoria-ticket.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaTicket } from './entities/categoria-ticket.entity';
import { CategoriaTicketService } from './categoria-ticket.service';
import { CategoriaTicketController } from './categoria-ticket.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CategoriaTicket])],
  controllers: [CategoriaTicketController],
  providers: [CategoriaTicketService],
})
export class CategoriaTicketModule {}
