import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserDto } from './dto/user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(userDto: UserDto): Promise<{
        token: {
            accessToken: string;
        };
    }>;
    signUp(createUserDto: CreateUserDto): Promise<import("../api-response/api-response").ApiResponse<import("../../entities/user.entity").User>>;
}
