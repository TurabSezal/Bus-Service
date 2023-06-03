/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusLocation } from '../../entities/bus-location.entity';
import { BusLocationController } from './bus-location.controller';
import { BusLocationService } from './bus-location.service';

@Module({
  imports: [TypeOrmModule.forFeature([BusLocation])],
  controllers: [BusLocationController],
  providers: [BusLocationService],
  exports: [BusLocationService],
})
export class BusLocationModule {}
