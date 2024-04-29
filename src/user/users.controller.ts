import {
    Controller,
    Post,
    Get,
    Patch,
    Delete,
    Body,
    Param,
    ParseIntPipe,
    UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, updateDto } from './user.dto';
import { listUsersResponseSchema, userResponseSchema } from './user.schema';
import { UserGuard } from './user.guard';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}


    @Post()
    @UseGuards(UserGuard) // Correção aqui: UseGuards ao invés de UserGuards
    async create(@Body() createDto: CreateUserDto) {
        const createdUser = await this.userService.create(
            'User',
            createDto,
        );
        return userResponseSchema.parse(createdUser);
    }

    @Get()
    async findAll() {
        const condition = { deleted: false };
        const listUsers = await this.userService.findMany('User', condition);
        return listUsersResponseSchema.parse(listUsers);
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number)  {
        const condition = { id, deleted: false };
        const user = await this.userService.findOne('User', condition);
        return userResponseSchema.parse(user);
    }

    /* @Get('search/:name')
    async getUserByName(@Param('name') email: string) {
        const condition = { email, deleted: false };
        const user = await this.userService.findOne('User', condition);
        return userResponseSchema.parse(user);
    } */

    @Get('search/:email')
    async getUserByEmail(@Param('email') email: string) {
        const condition = { email, deleted: false };
        const user = await this.userService.findOne('User', condition);
        return userResponseSchema.parse(user);
    }

    @Patch(':id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateDto: updateDto,
    ) {
        const userUpdated = await this.userService.update('User', { id }, updateDto);
        return userResponseSchema.parse(userUpdated);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        this.userService.softDelete('User', id)
        return { message: 'User deleted' };
    }
}
