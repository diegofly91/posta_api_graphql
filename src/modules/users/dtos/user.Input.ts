import { Field, InputType } from '@nestjs/graphql';
import {
    IsEmail,
    MinLength,
    MaxLength,
    IsNotEmpty,
    IsInt,
    IsBoolean,
} from 'class-validator';

@InputType()
export class CreateUserDto {
    
    @Field()
    @IsInt()
    @IsNotEmpty()
    roleId: number;

    @Field()
    @IsBoolean()
    @IsNotEmpty()
    isActive: boolean;

    @Field()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @Field()
    @MinLength(10, { message: 'Title is too short' })
    @MaxLength(50, { message: 'Title is too long' })
    @IsNotEmpty()
    password: string;
}

@InputType()
export class UpdateUserDto {
    @Field()
    @IsBoolean()
    @IsNotEmpty()
    isActive: boolean;

    @Field()
    @IsEmail()
    @IsNotEmpty()
    @MaxLength(50, { message: 'Title is too long' })
    email: string;

    @Field()
    @MinLength(10, { message: 'Title is too short' })
    @MaxLength(50, { message: 'Title is too long' })
    @IsNotEmpty()
    password: string;
}

@InputType()
export class LoginUserDto  {
    
    @Field()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @Field()
    @IsNotEmpty()
    password: string;
}
