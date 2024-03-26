import { Injectable } from '@nestjs/common';
import { GenericCrudService } from '../generic_crud/generic_crud.module';

@Injectable()
export class UserService extends GenericCrudService {
}