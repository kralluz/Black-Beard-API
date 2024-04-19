import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateBarberServiceDto {
    @IsNotEmpty()
    @IsNumber()
    readonly userId: number;

    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @IsNumber()
    @IsNotEmpty()
    readonly price: number;
}
export class updateBarberServiceDto extends PartialType(CreateBarberServiceDto) {}
