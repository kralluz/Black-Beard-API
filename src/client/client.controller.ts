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
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('client')
export class ClientController {
    constructor(private readonly clientService: ClientService) {}

    @Post()
    async create(@Body() CreateClientDto: CreateClientDto) {
        const created = await this.clientService.create(
            'Client',
            CreateClientDto,
        );

        return created;
    }

    @Get()
    async findAll() {
        const condition = { deleted: false };
        const list = await this.clientService.findMany('Client', condition);
        return list;
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        const condition = { id, deleted: false };
        const service = await this.clientService.findOne('Client', condition);
        return service;
    }

    @Patch(':id')
    async update(
        @Param('id', ParseIntPipe) id: string,
        @Body() UpdateClientDto: UpdateClientDto,
    ) {
        const serviceUpdated = await this.clientService.update(
            'Client',
            { id },
            UpdateClientDto,
        );
        return serviceUpdated;
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        this.clientService.softDelete('User', id);
        return { message: 'Client deleted' };
    }
}
