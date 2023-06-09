import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { User } from '../../entities/user.entity';
import { ConfigService } from '@nestjs/config';
import { Repository } from 'typeorm';
import { ApiResponse } from '../api-response/api-response';
export declare class AuthService {
    private userService;
    private jwtService;
    private readonly configService;
    private readonly userRepository;
    constructor(userService: UserService, jwtService: JwtService, configService: ConfigService, userRepository: Repository<User>);
    register(createUserDto: CreateUserDto): Promise<ApiResponse<User>>;
    signIn(user: User): Promise<{
        accessToken: string;
    }>;
    validateUser(username: string, password: string): Promise<User>;
}
