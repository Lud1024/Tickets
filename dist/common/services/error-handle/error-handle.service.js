"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandleService = void 0;
const common_1 = require("@nestjs/common");
let ErrorHandleService = class ErrorHandleService {
    constructor() {
        this.logger = new common_1.Logger('ErrorHandleService');
    }
    errorHandle(error) {
        if (error.code === '23505') {
            this.logger.error('Database error:', error.detail);
            throw new common_1.BadRequestException(error.detail);
        }
        this.logger.error('Unexpected error:', error);
        throw new common_1.InternalServerErrorException('Unexpected Error, check server logs for more details.');
    }
};
exports.ErrorHandleService = ErrorHandleService;
exports.ErrorHandleService = ErrorHandleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ErrorHandleService);
//# sourceMappingURL=error-handle.service.js.map