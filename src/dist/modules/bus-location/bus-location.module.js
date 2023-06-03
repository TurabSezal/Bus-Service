"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusLocationModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bus_location_entity_1 = require("../../entities/bus-location.entity");
const bus_location_controller_1 = require("./bus-location.controller");
const bus_location_service_1 = require("./bus-location.service");
let BusLocationModule = class BusLocationModule {
};
BusLocationModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([bus_location_entity_1.BusLocation])],
        controllers: [bus_location_controller_1.BusLocationController],
        providers: [bus_location_service_1.BusLocationService],
        exports: [bus_location_service_1.BusLocationService],
    })
], BusLocationModule);
exports.BusLocationModule = BusLocationModule;
//# sourceMappingURL=bus-location.module.js.map