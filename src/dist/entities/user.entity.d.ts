import { GlobalEntity } from './global.entity';
import { Gender } from './gender.entity';
export declare class User extends GlobalEntity {
    id: string;
    mail: string;
    password: string;
    name: string;
    gender_id: string;
    phone: string;
    age: number;
    gender: Gender;
}
