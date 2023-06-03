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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusExpeditionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bus_expedition_entity_1 = require("../../entities/bus-expedition.entity");
const api_response_1 = require("../api-response/api-response");
let BusExpeditionService = class BusExpeditionService {
    constructor(busExpeditionRepository) {
        this.busExpeditionRepository = busExpeditionRepository;
    }
    async findAll() {
        const bus = await this.busExpeditionRepository.find();
        const data = [];
        bus.map((value) => {
            data.push({
                id: value.id,
                departure_location_id: value.departure_location_id,
                arrival_location_id: value.arrival_location_id,
            });
        });
        return data;
    }
    async getByDepartureLocationId(id) {
        const bus = await this.busExpeditionRepository.find({
            where: { departure_location_id: id },
            relations: ['departureLocation', 'arrivalLocation'],
        });
        if (!bus)
            throw new Error('Bus Expedition not found');
        const data = [];
        bus.map((value) => {
            data.push({
                id: value.id,
                departure_location: value.departureLocation.title,
                arrival_location: value.arrivalLocation.title,
            });
        });
        return new api_response_1.SuccessResponse(data);
    }
    async findByID(id) {
        const bus = await this.busExpeditionRepository.findOne({ where: { id } });
        if (!bus)
            throw new Error('Bus Expedition not found');
        const data = [];
        data.push({
            id: bus.id,
            departure_location_id: bus.departure_location_id,
            arrival_location_id: bus.arrival_location_id,
            amount: bus.amount,
        });
        return data;
    }
};
BusExpeditionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bus_expedition_entity_1.BusExpedition)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BusExpeditionService);
exports.BusExpeditionService = BusExpeditionService;
//# sourceMappingURL=bus-expedition.service.js.map