import { BusLocation } from '../../entities/bus-location.entity';
import { Repository } from 'typeorm';
export declare class BusLocationService {
    private readonly busLocationRepository;
    constructor(busLocationRepository: Repository<BusLocation>);
    findAll(): Promise<BusLocation[]>;
}
