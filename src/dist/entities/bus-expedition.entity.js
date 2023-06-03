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
exports.BusExpedition = void 0;
const typeorm_1 = require("typeorm");
const global_entity_1 = require("./global.entity");
const bus_location_entity_1 = require("./bus-location.entity");
const bus_seat_entity_1 = require("./bus-seat.entity");
let BusExpedition = class BusExpedition extends global_entity_1.GlobalEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BusExpedition.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: false }),
    __metadata("design:type", String)
], BusExpedition.prototype, "departure_location_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: false }),
    __metadata("design:type", String)
], BusExpedition.prototype, "arrival_location_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], BusExpedition.prototype, "route_start_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], BusExpedition.prototype, "route_end_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BusExpedition.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => bus_location_entity_1.BusLocation, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'departure_location_id', referencedColumnName: 'id' }),
    __metadata("design:type", bus_location_entity_1.BusLocation)
], BusExpedition.prototype, "departureLocation", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => bus_location_entity_1.BusLocation, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'arrival_location_id', referencedColumnName: 'id' }),
    __metadata("design:type", bus_location_entity_1.BusLocation)
], BusExpedition.prototype, "arrivalLocation", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => bus_seat_entity_1.BusSeat, (busSeat) => busSeat.busExpedition, {
        eager: false,
    }),
    __metadata("design:type", bus_seat_entity_1.BusSeat)
], BusExpedition.prototype, "busSeats", void 0);
BusExpedition = __decorate([
    (0, typeorm_1.Entity)('bus_expedition')
], BusExpedition);
exports.BusExpedition = BusExpedition;
//# sourceMappingURL=bus-expedition.entity.js.map