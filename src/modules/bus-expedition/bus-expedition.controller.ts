import {
  Controller,
  Get,
  Param,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { BusExpeditionService } from './bus-expedition.service';
import { BusExpedition } from '../../entities/bus-expedition.entity';
import { UuidInterceptor } from '../../common/validate-uuid.interceptor';
import { ApiResponse } from '../api-response/api-response';

@UseGuards(AuthGuard)
@Controller('bus-expedition')
export class BusExpeditionController {
  constructor(private readonly busExpeditionService: BusExpeditionService) {}

  @Get()
  findAll(): Promise<BusExpedition[]> {
    return this.busExpeditionService.findAll();
  }
  @UseInterceptors(UuidInterceptor)
  @Get(':id')
  getByDepartureLocationId(@Param('id') id: string): Promise<ApiResponse<any>> {
    return this.busExpeditionService.getByDepartureLocationId(id);
  }
  @UseInterceptors(UuidInterceptor)
  @Get('findByID/:id')
  findByID(@Param('id') id: string): Promise<BusExpedition> {
    return this.busExpeditionService.findByID(id);
  }
}
