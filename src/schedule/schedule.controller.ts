import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    ParseIntPipe,
} from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { CreateScheduleDto, UpdateScheduleDto } from './dto/create-schedule.dto';

@Controller('schedule')
export class ScheduleController {
    constructor(private readonly scheduleService: ScheduleService) {}

    @Post()
    async create(@Body() CreateScheduleDto: CreateScheduleDto) {
        const created = await this.scheduleService.create('Schedule', CreateScheduleDto);
        return created;
    }

    @Get()
    async findAll() {
        const condition = { deleted: false };
        const list = await this.scheduleService.findMany('Schedule', condition);
        return list;
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        const condition = { id, deleted: false };
        const service = await this.scheduleService.findOne('Schedule', condition);
        return service;
    }

    @Patch(':id')
    async update(
        @Param('id', ParseIntPipe) id: string,
        @Body() UpdateScheduleDto: UpdateScheduleDto,
    ) {
        const serviceUpdated = await this.scheduleService.update(
            'Schedule',
            { id },
            UpdateScheduleDto,
        );
        return serviceUpdated;
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        this.scheduleService.softDelete('Schedule', id);
        return { message: 'Plan deleted' };
    }
}
