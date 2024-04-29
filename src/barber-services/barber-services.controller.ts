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
import { BarberServicesService } from './barber-services.service';
import { CreateBarberServiceDto, UpdateBarberServiceDto } from './dto/create-barber-service.dto';

@Controller('services')
export class BarberServicesController {
    constructor(
        private readonly barberServicesService: BarberServicesService,
    ) {}

    @Post()
    async create(@Body() createBarberServiceDto: CreateBarberServiceDto) {
        const created = await this.barberServicesService.create(
            'Service',
            createBarberServiceDto,
        );
        return created;
    }

    @Get()
    async findAll() {
        const condition = { deleted: false };
        const list = await this.barberServicesService.findMany(
            'Service',
            condition,
        );
        return list;
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        const condition = { id, deleted: false };
        const service = await this.barberServicesService.findOne(
            'Service',
            condition,
        );
        return service;
    }

    @Patch(':id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateBarberServiceDto: UpdateBarberServiceDto,
    ) {
        const serviceUpdated = await this.barberServicesService.update(
            'Service',
            { id },
            updateBarberServiceDto,
        );
        return serviceUpdated;
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: string) {
        this.barberServicesService.softDelete('User', id);
        return { message: 'Service deleted' };
    }
}
