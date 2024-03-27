export class CreateUserDto {
    readonly name: string;
    readonly companyName: string;
    readonly email: string;
    readonly passwordHash: string;
}

export class UpdateUserDto {
    readonly name: string;
    readonly email: string;
    readonly passwordHash: string;
}
