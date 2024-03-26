import {
    Controller,
    Post,
    Get,
    Patch,
    Delete,
    Body,
    Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { createUserResponseSchema } from 'src/schemas/user.schema';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
        const createdUser = await this.userService.create('User', createUserDto);
        return createUserResponseSchema.parse(createdUser);
    }

    @Get()
    async getUsers() {
        return this.userService.findMany('User');
    }

    @Get(':id')
    async getUserById(@Param('id') id: string) {
        return this.userService.findOne('User', UpdateUserDto);
    }

    @Patch(':id')
    async updateUser(
        @Param('id') id: string,
        @Body() updateUserDto: UpdateUserDto,
    ) {
        return this.userService.update('User', UpdateUserDto, id);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        return this.userService.softDelete('User', id);
    }
}
