import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsInt, IsDateString, MaxLength, ArrayMinSize } from 'class-validator';

export class CreateScheduleDto {
    @IsNotEmpty()
    @IsDateString()
    scheduledDate: Date;

    @IsNotEmpty()
    @MaxLength(100)
    description: string;

    @IsNotEmpty()
    @IsInt()
    userId: number;

    @IsNotEmpty()
    @IsInt()
    clientId: number;

    @ArrayMinSize(1)
    @IsInt({ each: true })
    services: number[];

    @IsNotEmpty()
    @IsInt()
    planId: number;
}

export class UpdateScheduleDto extends PartialType(CreateScheduleDto) {}