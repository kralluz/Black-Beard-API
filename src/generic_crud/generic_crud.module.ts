import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class GenericCrudService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async create<T>(tableName: string, data: any): Promise<T> {
        if (data.passwordHash) {
            const hashedPassword = await bcrypt.hash(data.passwordHash, 10);
            const newData = { ...data, passwordHash: hashedPassword };
            return this.prisma[tableName].create<T>({ data: newData });
        }

        if (data.services && Array.isArray(data.services)) {
            const serviceIds = data.services.map((serviceId) => ({
                id: serviceId,
            }));
            data.services = { connect: serviceIds };
        }
        return this.prisma[tableName].create<T>({ data });
    }

    async findOne<T>(tableName: string, conditions: any): Promise<T> {
        return this.prisma[tableName].findFirst<T>({ where: conditions });
    }

    async findMany<T>(tableName: string, conditions: any): Promise<T[]> {
        return this.prisma[tableName].findMany<T>({ where: conditions });
    }

    async update<T>(tableName: string, conditions: any, data: any): Promise<T> {
        return this.prisma[tableName].update<T>({ where: conditions, data });
    }

    async softDelete<T>(tableName: string, conditions: any): Promise<T> {
        return this.prisma[tableName].delete<T>({ where: conditions });
    }

    async getTableColumns(tableName: string): Promise<string[]> {
        const columns: { column_name: string }[] = await this.prisma
            .$queryRaw`SELECT column_name FROM information_schema.columns WHERE table_name = ${tableName}`;
        const columnNames = columns.map((column) => column.column_name);
        return columnNames;
    }

    async getTableInfo(): Promise<{
        [key: string]: { name: string; type: string }[];
    }> {
        const tableInfo: { table_name: string }[] = await this.prisma
            .$queryRaw`SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'`;

        const tableInfoPromises = tableInfo.map(async (table) => {
            const tableName = table.table_name;
            const columns = await this.getTableColumns(tableName);
            const columnTypes = await this.getTableColumnTypes(tableName);

            // Combinar os nomes e tipos de coluna em um único objeto
            const columnsInfo = columns.map((columnName, index) => ({
                name: columnName,
                type: columnTypes[index],
            }));

            return { [tableName]: columnsInfo };
        });

        const tableInfoList = await Promise.all(tableInfoPromises);
        return Object.assign({}, ...tableInfoList);
    }

    async getTableColumnTypes(tableName: string): Promise<string[]> {
        const columnTypesQuery: any[] = await this.prisma.$queryRaw`
            SELECT column_name, data_type
            FROM information_schema.columns
            WHERE table_name = ${tableName} AND table_schema = 'public'
        `;

        return columnTypesQuery.map(
            (column: { column_name: string; data_type: string }) =>
                column.data_type,
        );
    }
}
