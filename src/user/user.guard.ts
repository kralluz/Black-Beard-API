import { Injectable, CanActivate, ExecutionContext, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { UserService } from './user.service';

@Injectable()
export class UserGuard implements CanActivate {
    constructor(private readonly userService: UserService) {}

    async canActivate(
        context: ExecutionContext,
    ): Promise<boolean> {
        const request: Request = context.switchToHttp().getRequest();
        const response: Response = context.switchToHttp().getResponse();
        const email: string = request.body.email;
        const condition = { email, deleted: false };
        const userExists = await this.userService.findOne('User', condition);

        if (userExists) {
            response.status(HttpStatus.BAD_REQUEST).json({ message: 'Este email já existe!' });
            return false;
        }
        
        return true;
    }
}