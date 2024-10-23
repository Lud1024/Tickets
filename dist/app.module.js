"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const usuarios_module_1 = require("./usuarios/usuarios.module");
const departamentos_module_1 = require("./departamentos/departamentos.module");
const categoria_ticket_module_1 = require("./categoriasTickets/categoria-ticket.module");
const ticket_module_1 = require("./tickets/ticket.module");
const asignacion_ticket_module_1 = require("./asignacionTickets/asignacion-ticket.module");
const comentario_module_1 = require("./comentarios/comentario.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST,
                port: +process.env.DB_PORT,
                database: process.env.DB_NAME,
                username: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                autoLoadEntities: true,
                synchronize: process.env.DB_SYNC === 'true',
            }),
            usuarios_module_1.UsuariosModule,
            departamentos_module_1.DepartamentosModule,
            categoria_ticket_module_1.CategoriaTicketModule,
            ticket_module_1.TicketModule,
            asignacion_ticket_module_1.AsignacionTicketModule,
            comentario_module_1.ComentarioModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map