import { Module } from '@nestjs/common';
import { BarberServicesService } from './barber-services.service';
import { BarberServicesController } from './barber-services.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [BarberServicesController],
  imports: [DatabaseModule],
  providers: [BarberServicesService],
})
export class BarberServicesModule {}
