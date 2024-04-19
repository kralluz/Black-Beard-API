import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsInt, IsDecimal,MaxLength, Min } from 'class-validator';

export class CreatePlanDto {
    @IsNotEmpty()
    @IsInt()
    userId: number;

    @IsNotEmpty()
    @MaxLength(100)
    name: string;

    @IsNotEmpty()
    @MaxLength(100)
    description: string;

    @IsNotEmpty()
    @IsDecimal({ decimal_digits: '2' })
    price: number;

    @IsNotEmpty()
    @IsInt()
    @Min(1)
    durationMonths: number;
}

export class updatePlanDto extends PartialType(CreatePlanDto) {}