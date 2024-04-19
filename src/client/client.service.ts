import { Injectable } from '@nestjs/common';
import { GenericCrudService } from 'src/generic_crud/generic_crud.module';

@Injectable()
export class ClientService extends GenericCrudService {
}
