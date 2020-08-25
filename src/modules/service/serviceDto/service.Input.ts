import { Field, InputType } from '@nestjs/graphql';
import {
    MinLength,
    MaxLength,
    IsNotEmpty,
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

@InputType()
export class NewServiceInput {
    
    @Field({ nullable: true })
    @IsInt()
    id_company: number;

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

@InputType()
export class ServiceInputQuery {
    
    @Field({ nullable: true })
    @IsInt()
    id_company: number;

    @Field({ nullable: true })
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

