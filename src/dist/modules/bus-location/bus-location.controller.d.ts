import { BusLocationService } from './bus-location.service';
import { BusLocation } from '../../entities/bus-location.entity';
export declare class BusLocationController {
    private readonly busLocationService;
    constructor(busLocationService: BusLocationService);
    findAll(): Promise<BusLocation[]>;
}
