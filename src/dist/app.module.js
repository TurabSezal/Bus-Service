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
const bus_expedition_module_1 = require("./modules/bus-expedition/bus-expedition.module");
const gender_entity_1 = require("./entities/gender.entity");
const bus_expedition_entity_1 = require("./entities/bus-expedition.entity");
const bus_location_entity_1 = require("./entities/bus-location.entity");
const bus_seat_entity_1 = require("./entities/bus-seat.entity");
const bus_location_module_1 = require("./modules/bus-location/bus-location.module");
const auth_module_1 = require("./modules/auth/auth.module");
const user_module_1 = require("./modules/user/user.module");
const user_entity_1 = require("./entities/user.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: 'local.env',
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    type: 'postgres',
                    host: configService.get('DATABASE_HOST'),
                    port: configService.get('DATABASE_PORT'),
                    username: 'postgres',
                    password: 'Turab_46',
                    database: configService.get('DATABASE_NAME'),
                    logging: configService.get('DATABASE_LOGGING'),
                    synchronize: configService.get('DATABASE_SYNC'),
                    entities: [gender_entity_1.Gender, bus_expedition_entity_1.BusExpedition, bus_location_entity_1.BusLocation, bus_seat_entity_1.BusSeat, user_entity_1.User],
                }),
                inject: [config_1.ConfigService],
            }),
            bus_expedition_module_1.BusExpeditionModule,
            bus_location_module_1.BusLocationModule,
            auth_module_1.AuthModule,
            user_module_1.UserModule,
        ],
        providers: [],
        controllers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map