import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Turab_46',
      database: 'bus_service',
      synchronize: true,
      logging: true,
    }),
    ConfigModule.forRoot({
      envFilePath: 'local.env',
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
