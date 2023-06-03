import { Repository } from 'typeorm';
import { BusExpedition } from '../../entities/bus-expedition.entity';
import { ApiResponse } from '../api-response/api-response';
export declare class BusExpeditionService {
    private readonly busExpeditionRepository;
    constructor(busExpeditionRepository: Repository<BusExpedition>);
    findAll(): Promise<BusExpedition[]>;
    getByDepartureLocationId(id: string): Promise<ApiResponse<any>>;
    findByID(id: string): Promise<any>;
}
