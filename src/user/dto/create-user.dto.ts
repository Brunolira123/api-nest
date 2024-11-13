import { IsDateString, IsEmail, IsOptional, isString, IsString, MinLength } from "class-validator";

export class CreateUserDTO {
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    //exige demais caracteres especiais e numeros como 1,
    // ou seja é necessario ter 1 numero, 1 caractere especial, tamanho 6 e 1 letra maiuscula
    @IsString()
    @MinLength(6)
    password: string;

    @IsOptional()
    @IsDateString()
    birthAt: string;

}