import { Module } from '@nestjs/common';
import { BarberServicesService } from './barber-services.service';
import { BarberServicesController } from './barber-services.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  controllers: [BarberServicesController],
  providers: [BarberServicesService],
  imports: [DatabaseModule],
})
export class BarberServicesModule {}
