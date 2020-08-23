import { Field, InputType } from '@nestjs/graphql';
import {
    Length,
    IsEmail,
    MinLength,
    MaxLength,
    IsNotEmpty,
    IsEmpty,
    IsInt,
    IsBoolean,
    IsNumber,
} from 'class-validator';

@InputType()
export class ServiceInput {
    @Field({ nullable: false })
    @MinLength(1, { message: 'Title is too short' })
    @MaxLength(50, { message: 'Title is too long' })
    @IsNotEmpty()
    name: string;

    @Field({ nullable: true })
    @MaxLength(150, { message: 'Description is too long' })
    description: string;

    @Field({ nullable: true })
    @IsInt()
    duration: number;

    @Field({ nullable: true })
    @IsNumber()
    price: number;

    @Field({ nullable: true })
    @IsBoolean()
    status: boolean;
}
