import { GlobalEntity } from './global.entity';
import { BusExpedition } from './bus-expedition.entity';
export declare class BusLocation extends GlobalEntity {
    id: string;
    title: string;
    departureLocations: BusExpedition[];
}
