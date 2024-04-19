import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [ClientController],
  imports: [DatabaseModule],
  providers: [ClientService],
})
export class ClientModule {}
