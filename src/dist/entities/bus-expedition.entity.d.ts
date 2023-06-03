import { GlobalEntity } from './global.entity';
import { BusLocation } from './bus-location.entity';
import { BusSeat } from './bus-seat.entity';
export declare class BusExpedition extends GlobalEntity {
    id: string;
    departure_location_id: string;
    arrival_location_id: string;
    route_start_time: Date;
    route_end_time: Date;
    amount: number;
    departureLocation: BusLocation;
    arrivalLocation: BusLocation;
    busSeats: BusSeat;
}
