import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BusExpeditionModule } from './modules/bus-expedition/bus-expedition.module';
import { Gender } from './entities/gender.entity';
import { BusExpedition } from './entities/bus-expedition.entity';
import { BusLocation } from './entities/bus-location.entity';
import { BusSeat } from './entities/bus-seat.entity';
import { BusLocationModule } from './modules/bus-location/bus-location.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { User } from './entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'local.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: 'postgres',
        password: 'Turab_46',
        database: configService.get<string>('DATABASE_NAME'),
        logging: configService.get<boolean>('DATABASE_LOGGING'),
        synchronize: configService.get<boolean>('DATABASE_SYNC'),
        entities: [Gender, BusExpedition, BusLocation, BusSeat, User],
      }),
      inject: [ConfigService],
    }),
    BusExpeditionModule,
    BusLocationModule,
    AuthModule,
    UserModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
