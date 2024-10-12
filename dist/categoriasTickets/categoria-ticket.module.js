"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaTicketModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const categoria_ticket_entity_1 = require("./entities/categoria-ticket.entity");
const categoria_ticket_service_1 = require("./categoria-ticket.service");
const categoria_ticket_controller_1 = require("./categoria-ticket.controller");
let CategoriaTicketModule = class CategoriaTicketModule {
};
exports.CategoriaTicketModule = CategoriaTicketModule;
exports.CategoriaTicketModule = CategoriaTicketModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([categoria_ticket_entity_1.CategoriaTicket])],
        controllers: [categoria_ticket_controller_1.CategoriaTicketController],
        providers: [categoria_ticket_service_1.CategoriaTicketService],
    })
], CategoriaTicketModule);
//# sourceMappingURL=categoria-ticket.module.js.map