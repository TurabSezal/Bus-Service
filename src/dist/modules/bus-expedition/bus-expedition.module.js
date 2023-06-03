"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusExpeditionModule = void 0;
const common_1 = require("@nestjs/common");
const bus_expedition_controller_1 = require("./bus-expedition.controller");
const bus_expedition_service_1 = require("./bus-expedition.service");
const typeorm_1 = require("@nestjs/typeorm");
const bus_expedition_entity_1 = require("../../entities/bus-expedition.entity");
let BusExpeditionModule = class BusExpeditionModule {
};
BusExpeditionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([bus_expedition_entity_1.BusExpedition])],
        controllers: [bus_expedition_controller_1.BusExpeditionController],
        providers: [bus_expedition_service_1.BusExpeditionService],
        exports: [bus_expedition_service_1.BusExpeditionService],
    })
], BusExpeditionModule);
exports.BusExpeditionModule = BusExpeditionModule;
//# sourceMappingURL=bus-expedition.module.js.map