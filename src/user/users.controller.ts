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
        const listUsers = await this.userService.findMany('User');
        return listUsersResponseSchema.parse(listUsers);
    }

    @Get(':id')
    async getUserById(@Param('id', ParseIntPipe) id: number)  {
        const condition = { id };
        const user = await this.userService.findOne('User', condition);
        return userResponseSchema.parse(user);
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
