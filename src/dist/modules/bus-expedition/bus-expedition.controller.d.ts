import { BusExpeditionService } from './bus-expedition.service';
import { BusExpedition } from '../../entities/bus-expedition.entity';
import { ApiResponse } from '../api-response/api-response';
export declare class BusExpeditionController {
    private readonly busExpeditionService;
    constructor(busExpeditionService: BusExpeditionService);
    findAll(): Promise<BusExpedition[]>;
    getByDepartureLocationId(id: string): Promise<ApiResponse<any>>;
    findByID(id: string): Promise<BusExpedition>;
}
