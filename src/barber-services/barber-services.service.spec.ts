import { Test, TestingModule } from '@nestjs/testing';
import { BarberServicesService } from './barber-services.service';
import { PrismaService } from '../database/prisma.service';

describe('BarberServicesService', () => {
    let service: BarberServicesService;
    let prismaService: PrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                BarberServicesService,
                {
                    provide: PrismaService,
                    useValue: {
                        Service: {
                            create: jest.fn(),
                            findFirst: jest.fn(),
                            findMany: jest.fn(),
                        },
                    },
                },
            ],
        }).compile();

        service = module.get<BarberServicesService>(BarberServicesService);
        prismaService = module.get<PrismaService>(PrismaService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('deve ser definido', () => {
        expect(service).toBeDefined();
    });

    it('deve chamar o método create do PrismaService com os parâmetros corretos', async () => {
        const createDto = {
            userId: 1,
            name: 'Corte de Cabelo',
            description: 'Corte de cabelo masculino',
            price: '25',
        };

        const result = await service.create('Service', createDto);
        const createdService = {
            id: expect.any(Number),
            userId: 1,
            name: 'Corte de Cabelo',
            description: 'Corte de cabelo masculino',
            price: '25',
            createdAt: expect.any(Date),
            updatedAt: expect.any(Date),
            deleted: false,
            deletedAt: expect.any(Date),
        };

        jest.spyOn(prismaService.Service, 'create').mockResolvedValue(
            createdService,
        );

        expect(result).toEqual(createdService);
    });

    it('deve chamar o método findMany do PrismaService com as condições corretas', async () => {
        const condition = { deleted: false };
        const expectedResult = [
            {
                id: 1,
                name: 'Corte de Cabelo',
                description: 'Corte de cabelo masculino',
            },
        ];

        jest.spyOn(prismaService.Service, 'findMany').mockResolvedValue(
            expectedResult,
        );

        const result = await service.findMany('Service', condition);

        console.log('Condição:', condition);    

        expect(prismaService.Service.findMany).toHaveBeenCalledWith({
            where: condition,
        });
        expect(result).toEqual(expectedResult);
    });

    it('deve chamar o método findOne do PrismaService com as condições corretas', async () => {
        // Teste do método findOne
        const condition = { id: 1, deleted: false };
        const expectedResult = {
            id: 1,
            name: 'Corte de Cabelo',
            description: 'Corte de cabelo masculino',
        };

        jest.spyOn(prismaService.Service, 'findFirst').mockResolvedValue(
            expectedResult,
        );

        const result = await service.findOne('Service', condition);

        expect(prismaService.Service.findFirst).toHaveBeenCalledWith({
            where: condition,
        });
        expect(result).toEqual(expectedResult);
    });
});
