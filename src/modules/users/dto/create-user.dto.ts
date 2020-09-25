import {
    IsBoolean,
    IsEmail,
    IsNotEmpty,
    IsString,
    MaxLength,
    MinLength,
} from 'class-validator';

export class CreateUserDto {
    @MinLength(10, { message: 'Email is too short' })
    @MaxLength(60, { message: 'Email is too long' })
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string;

    @MinLength(8, { message: 'Password is too short' })
    @MaxLength(64, { message: 'Password is too long' })
    @IsString()
    @IsNotEmpty()
    password: string;

    @IsBoolean()
    isActive: boolean;
}
