import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findOne(mail: string): Promise<User | undefined>;
    create(createUserDto: CreateUserDto): Promise<User>;
}
