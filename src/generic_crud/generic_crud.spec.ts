import { Test, TestingModule } from '@nestjs/testing';
import { GenericCrudService } from './generic_crud.module';
import { PrismaClient } from '@prisma/client';

// Mock do PrismaClient
const prismaClientMock = {
    $queryRaw: jest.fn(),
    user: {
        create: jest.fn(),
        findFirst: jest.fn(),
        findMany: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
    },
};

describe('GenericCrudService', () => {
    let service: GenericCrudService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                GenericCrudService,
                {
                    provide: PrismaClient,
                    useValue: prismaClientMock,
                },
            ],
        }).compile();

        service = module.get<GenericCrudService>(GenericCrudService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

});
