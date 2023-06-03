/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusLocation } from '../../entities/bus-location.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BusLocationService {
  constructor(
    @InjectRepository(BusLocation)
    private readonly busLocationRepository: Repository<BusLocation>,
  ) {}
  async findAll(): Promise<BusLocation[]> {
    const location = await this.busLocationRepository.find();
    const data = [];
    location.map((value) => {
      data.push({
        id: value.id,
        title: value.title,
      });
    });
    return data;
  }
}
