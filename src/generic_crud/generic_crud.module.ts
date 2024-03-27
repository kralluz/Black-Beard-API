import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

/**
 * GenericCrudService:
 * Classe que fornece métodos genéricos para criar, ler, atualizar e excluir registros em qualquer tabela do banco de dados.
 * Abstrai a lógica de operações CRUD, permitindo reutilizar facilmente esses métodos em diferentes partes do aplicativo.
 * Facilita a manutenção e a escalabilidade do código, pois mantém uma separação clara das operações de banco de dados.
 */

@Injectable()
export class GenericCrudService {
    constructor(private readonly prismaService: PrismaService) {}

    async create<T>(tableName: string, data: any): Promise<T> {
        return this.prismaService.create<T>(tableName, data);
    }

    async findOne<T>(tableName: string, conditions: any): Promise<T> {
        return this.prismaService.findOne<T>(tableName, conditions);
    }

    async findMany<T>(tableName: string, conditions: any,): Promise<T[]> {
        return this.prismaService.findMany<T>(tableName, conditions);
    }

    async update<T>(tableName: string, conditions: any, data: any): Promise<T> {
        return this.prismaService.update<T>(tableName, conditions, data);
    }

    async softDelete<T>(tableName: string, conditions: any): Promise<T> {
        return this.prismaService.softDelete<T>(tableName, conditions);
    }
}
