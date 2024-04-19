import { PartialType } from '@nestjs/mapped-types';
import {
    IsString,
    IsEmail,
    IsNotEmpty,
    MinLength,
} from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(4, { message: 'Nome precisa ter no mínimo 4 caracteres.' })
    readonly name: string;

    @IsNotEmpty({ message: 'Nome da empresa não pode ser vazio' })
    @MinLength(4, { message: 'Nome precisa ter no mínimo 4 caracteres.' })
    readonly companyName: string;

    @IsEmail()
    readonly email: string;

    @IsString()
    @MinLength(3, { message: 'A senha eve ter no mínimo 8 caracteres.' })
    readonly passwordHash: string;
}

export class updateDto extends PartialType(CreateUserDto) {}