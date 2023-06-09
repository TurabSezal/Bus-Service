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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
const user_entity_1 = require("../../entities/user.entity");
const config_1 = require("@nestjs/config");
const bcrypt = require("bcrypt");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const api_response_1 = require("../api-response/api-response");
let AuthService = class AuthService {
    constructor(userService, jwtService, configService, userRepository) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.configService = configService;
        this.userRepository = userRepository;
    }
    async register(createUserDto) {
        const exist = await this.userRepository.find({
            where: { mail: createUserDto.mail },
        });
        if (exist.length > 0) {
            throw new common_1.BadRequestException('User already exists');
        }
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(createUserDto.password, salt);
        const user = await this.userService.create(Object.assign(Object.assign({}, createUserDto), { password: hashedPassword }));
        return new api_response_1.SuccessResponse(user);
    }
    async signIn(user) {
        const payload = { mail: user.mail, password: user.password };
        const accessToken = this.jwtService.sign(payload, {
            secret: this.configService.get('JWT_SECRET'),
            expiresIn: '6h',
        });
        return { accessToken };
    }
    async validateUser(username, password) {
        const user = await this.userService.findOne(username);
        if (!user) {
            throw new common_1.BadRequestException('User information is incorrect');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.BadRequestException('User information is incorrect');
        }
        return user;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(3, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService,
        config_1.ConfigService,
        typeorm_2.Repository])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map