// class-validator은 type을 제공해주는 라이브러리다.
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Length, MaxLength, MinLength } from "class-validator";


// IsNotEmptpy() => 값이 비어있으면 안됨

export class AccountUser {
    // @IsString()
    // @IsOptional()
    // avatar?: string;

    @IsString()
    @MinLength(2)
    @MaxLength(6)
    @IsNotEmpty()
    name?: string

    @IsString()
    @MinLength(3)
    @MaxLength(11)
    @IsNotEmpty()
    nickName?: string

    @IsEmail()
    @IsNotEmpty()
    email?: string


    @IsString()
    @MinLength(8)
    @MaxLength(16)
    @IsNotEmpty()
    password?: string
}