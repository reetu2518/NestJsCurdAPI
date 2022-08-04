import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail()
    email : string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    gender: string

    @IsNotEmpty()
    status:string;
}