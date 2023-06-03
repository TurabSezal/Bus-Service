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
exports.BusSeat = void 0;
const typeorm_1 = require("typeorm");
const global_entity_1 = require("./global.entity");
const bus_expedition_entity_1 = require("./bus-expedition.entity");
const gender_entity_1 = require("./gender.entity");
let BusSeat = class BusSeat extends global_entity_1.GlobalEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BusSeat.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BusSeat.prototype, "bus_expediton_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BusSeat.prototype, "gender_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BusSeat.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], BusSeat.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => bus_expedition_entity_1.BusExpedition, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'bus_expediton_id',
        referencedColumnName: 'id',
    }),
    __metadata("design:type", bus_expedition_entity_1.BusExpedition)
], BusSeat.prototype, "busExpedition", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => gender_entity_1.Gender, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'gender_id',
        referencedColumnName: 'id',
    }),
    __metadata("design:type", gender_entity_1.Gender)
], BusSeat.prototype, "gender", void 0);
BusSeat = __decorate([
    (0, typeorm_1.Entity)('bus_seat')
], BusSeat);
exports.BusSeat = BusSeat;
//# sourceMappingURL=bus-seat.entity.js.map