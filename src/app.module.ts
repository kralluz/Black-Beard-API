import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { UserController } from './user/users.controller';
import { UserGuard } from './user/user.guard';
import { BarberServicesModule } from './barber-services/barber-services.module';
import { PlanModule } from './plan/plan.module';
import { ClientModule } from './client/client.module';
import { ScheduleModule } from './schedule/schedule.module';

@Module({
    controllers: [AppController, UserController],
    providers: [AppService, UserService, UserGuard],
    imports: [DatabaseModule, UserModule, BarberServicesModule, PlanModule, ClientModule, ScheduleModule],
})
export class AppModule {}
