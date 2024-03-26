import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenericCrudService } from './generic_crud/generic_crud.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { UserController } from './user/users.controller';

@Module({
    controllers: [AppController, UserController],
    providers: [AppService, UserService],
    imports: [DatabaseModule, UserModule],
})
export class AppModule {}
