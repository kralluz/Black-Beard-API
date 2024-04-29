import { Module } from '@nestjs/common';
import { PlanService } from './plan.service';
import { PlanController } from './plan.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  controllers: [PlanController],
  imports: [DatabaseModule],
  providers: [PlanService],
})
export class PlanModule {}
