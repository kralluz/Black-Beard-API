import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsOptional, IsEmail, IsInt, IsBoolean, IsDateString, MaxLength } from 'class-validator';

export class CreateClientDto {
    @IsNotEmpty()
    @MaxLength(100)
    name: string;

    @IsOptional()
    @IsEmail()
    @MaxLength(100)
    email: string;

    @IsNotEmpty()
    @MaxLength(50)
    phone: string;

    @IsNotEmpty()
    @IsInt()
    userId: number;

    @IsNotEmpty()
    @IsInt()
    planId: number;
}

export class updateClientDto extends PartialType(CreateClientDto) {}