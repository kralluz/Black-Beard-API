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
import { PlanService } from './plan.service';
import { CreatePlanDto, updatePlanDto } from './dto/create-plan.dto';

@Controller('plan')
export class PlanController {
    constructor(private readonly planService: PlanService) {}

    @Post()
    async create(@Body() CreatePlanDto: CreatePlanDto) {
        console.log(
            '🚀 ~ PlanController ~ create ~ CreatePlanDto:',
            CreatePlanDto,
        );
        const created = await this.planService.create('Plan', CreatePlanDto);

        return created;
    }

    @Get()
    async findAll() {
        const condition = { deleted: false };
        const list = await this.planService.findMany('Plan', condition);
        return list;
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        const condition = { id, deleted: false };
        const service = await this.planService.findOne('Plan', condition);
        return service;
    }

    @Patch(':id')
    async update(
        @Param('id', ParseIntPipe) id: string,
        @Body() updatePlanDto: updatePlanDto,
    ) {
        const serviceUpdated = await this.planService.update(
            'Plan',
            { id },
            updatePlanDto,
        );
        return serviceUpdated;
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        this.planService.softDelete('User', id);
        return { message: 'Plan deleted' };
    }
}
