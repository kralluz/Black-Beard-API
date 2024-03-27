import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';

/**
 * PrismaService:
 * Classe responsável por interagir diretamente com o Prisma, fornecendo métodos para realizar operações no banco de dados.
 * Sua principal responsabilidade é encapsular a lógica de acesso e manipulação de dados usando o Prisma.
 */

@Injectable()
export class PrismaService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async create<T>(tableName: string, data: any): Promise<T> {
        return this.prisma[tableName].create({ data }) as Promise<T>;
    }

    async findOne<T>(tableName: string, conditions: any): Promise<T> {
        return this.prisma[tableName].findUnique({ where: conditions }) as Promise<T>;
    }

    async findMany<T>(tableName: string, conditions: any): Promise<T[]> {
        return this.prisma[tableName].findMany({ where: conditions }) as Promise<T[]>;
    }

    async update<T>(tableName: string, conditions: any, data: any): Promise<T> {
        return this.prisma[tableName].update({ where: conditions, data }) as Promise<T>;
    }

    async softDelete<T>(tableName: string, conditions: any): Promise<T> {
        return this.prisma[tableName].update({ where: conditions, data: { deleted: true } }) as Promise<T>;
    }
}
