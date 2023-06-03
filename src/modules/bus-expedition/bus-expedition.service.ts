import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BusExpedition } from '../../entities/bus-expedition.entity';
import { ApiResponse, SuccessResponse } from '../api-response/api-response';

@Injectable()
export class BusExpeditionService {
  constructor(
    @InjectRepository(BusExpedition)
    private readonly busExpeditionRepository: Repository<BusExpedition>,
  ) {}

  async findAll(): Promise<BusExpedition[]> {
    const bus = await this.busExpeditionRepository.find();
    const data = [];
    bus.map((value) => {
      data.push({
        id: value.id,
        departure_location_id: value.departure_location_id,
        arrival_location_id: value.arrival_location_id,
        // name: busExpedition.name,
        // bus_number: busExpedition.bus_number,
        // bus_type: busExpedition.bus_type,
        // bus_capacity: busExpedition.bus_capacity,
        // bus_location: busExpedition.bus_location,
        // bus_status: busExpedition.bus_status,
        // bus_driver: busExpedition.bus_driver,
        // bus_conductor: busExpedition.bus_conductor,
        // bus_route: busExpedition.bus_route,
        // bus_route_start: busExpedition.bus_route_start,
        // bus_route_end: busExpedition.bus_route_end,
        // bus_route_start_time: busExpedition.bus_route_start_time,
        // bus_route_end_time: busExpedition.bus_route_end_time,
        // bus_route_start_date: busExpedition.bus_route_start_date,
      });
    });
    return data;
  }

  async getByDepartureLocationId(id: string): Promise<ApiResponse<any>> {
    const bus = await this.busExpeditionRepository.find({
      where: { departure_location_id: id },
      relations: ['departureLocation', 'arrivalLocation'],
    });
    if (!bus) throw new Error('Bus Expedition not found');
    const data = [];
    bus.map((value) => {
      data.push({
        id: value.id,
        departure_location: value.departureLocation.title,
        arrival_location: value.arrivalLocation.title,
      });
    });

    return new SuccessResponse(data);
  }
  async findByID(id: string): Promise<any> {
    const bus = await this.busExpeditionRepository.findOne({ where: { id } });
    if (!bus) throw new Error('Bus Expedition not found');
    const data = [];
    data.push({
      id: bus.id,
      departure_location_id: bus.departure_location_id,
      arrival_location_id: bus.arrival_location_id,
      amount: bus.amount,
    });
    return data;
  }
}
