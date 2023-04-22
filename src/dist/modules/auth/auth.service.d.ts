import { GenericResponse } from './../GenericResponse/GenericResponse';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { User } from '../../entities/user.entity';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private userService;
    private jwtService;
    private readonly configService;
    constructor(userService: UserService, jwtService: JwtService, configService: ConfigService);
    register(createUserDto: CreateUserDto): Promise<GenericResponse<User>>;
    signIn(user: User): Promise<{
        accessToken: string;
    }>;
    validateUser(username: string, password: string): Promise<User>;
}
