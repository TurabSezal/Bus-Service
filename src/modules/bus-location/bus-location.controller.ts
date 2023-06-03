/* eslint-disable prettier/prettier */

import { Controller, Get } from '@nestjs/common';
import { BusLocationService } from './bus-location.service';
import { BusLocation } from '../../entities/bus-location.entity';

@Controller('bus-location')
export class BusLocationController {
  constructor(private readonly busLocationService: BusLocationService) {}

  @Get()
  findAll(): Promise<BusLocation[]> {
    return this.busLocationService.findAll();
  }
}
