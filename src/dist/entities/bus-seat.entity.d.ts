import { GlobalEntity } from './global.entity';
import { BusExpedition } from './bus-expedition.entity';
import { Gender } from './gender.entity';
export declare class BusSeat extends GlobalEntity {
    id: string;
    bus_expediton_id: string;
    gender_id: string;
    number: number;
    status: boolean;
    busExpedition: BusExpedition;
    gender: Gender;
}
