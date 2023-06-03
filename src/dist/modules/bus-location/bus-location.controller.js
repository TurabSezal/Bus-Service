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
exports.BusLocationController = void 0;
const common_1 = require("@nestjs/common");
const bus_location_service_1 = require("./bus-location.service");
let BusLocationController = class BusLocationController {
    constructor(busLocationService) {
        this.busLocationService = busLocationService;
    }
    findAll() {
        return this.busLocationService.findAll();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BusLocationController.prototype, "findAll", null);
BusLocationController = __decorate([
    (0, common_1.Controller)('bus-location'),
    __metadata("design:paramtypes", [bus_location_service_1.BusLocationService])
], BusLocationController);
exports.BusLocationController = BusLocationController;
//# sourceMappingURL=bus-location.controller.js.map