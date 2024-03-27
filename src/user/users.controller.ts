import {
    Controller,
    Post,
    Get,
    Patch,
    Delete,
    Body,
    Param,
    ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { listUsersResponseSchema, userResponseSchema } from 'src/schemas/user.schema';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
        const createdUser = await this.userService.create(
            'User',
            createUserDto,
        );
        return userResponseSchema.parse(createdUser);
    }

    @Get()
    async getUsers() {
        const condition = { delete: false };
        const listUsers = await this.userService.findMany('User', condition);
        return listUsersResponseSchema.parse(listUsers);
    }

    @Get(':id')
    async getUserById(@Param('id', ParseIntPipe) id: number)  {
        const condition = { id, delete: false };
        const user = await this.userService.findOne('User', condition);
        return userResponseSchema.parse(user);
    }

    @Get('search/:email')
    async getUserByEmail(@Param('email') email: string) {
        const condition = { email, delete: false };
        const user = await this.userService.findOne('User', condition);
        return userResponseSchema.parse(user);
    }

    @Patch(':id')
    async updateUser(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateUserDto: UpdateUserDto,
    ) {
        const userUpdated = await this.userService.update('User', { id }, updateUserDto);
        return userResponseSchema.parse(userUpdated);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        this.userService.softDelete('User', id)
    }
}
