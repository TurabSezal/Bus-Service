import { Module } from '@nestjs/common';
import { BusExpeditionController } from './bus-expedition.controller';
import { BusExpeditionService } from './bus-expedition.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusExpedition } from '../../entities/bus-expedition.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BusExpedition])],
  controllers: [BusExpeditionController],
  providers: [BusExpeditionService],
  exports: [BusExpeditionService],
})
export class BusExpeditionModule {}
