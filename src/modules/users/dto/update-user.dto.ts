import { IsBoolean, IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateUserDto {
    @MinLength(10, { message: 'Email is too short' })
    @MaxLength(60, { message: 'Email is too long' })
    @IsEmail()
    email: string;

    @MinLength(8, { message: 'Username is too short' })
    @MaxLength(30, { message: 'Username is too long' })
    @IsString()
    @IsNotEmpty()
    username: string;

    @MinLength(8, { message: 'Password is too short' })
    @MaxLength(64, { message: 'Password is too long' })
    @IsString()
    @IsNotEmpty()
    password: string;

    @IsBoolean()
    isActive: boolean;
}
