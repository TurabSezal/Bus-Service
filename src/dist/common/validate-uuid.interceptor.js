"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UuidInterceptor = void 0;
const common_1 = require("@nestjs/common");
let UuidInterceptor = class UuidInterceptor {
    intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const id = request.params.id;
        const isUuid = this.isValidUuid(id);
        if (!isUuid) {
            throw new common_1.HttpException('Invalid UUID', common_1.HttpStatus.BAD_REQUEST);
        }
        return next.handle();
    }
    isValidUuid(id) {
        return /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[4|5][a-fA-F0-9]{3}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/.test(id);
    }
};
UuidInterceptor = __decorate([
    (0, common_1.Injectable)()
], UuidInterceptor);
exports.UuidInterceptor = UuidInterceptor;
//# sourceMappingURL=validate-uuid.interceptor.js.map