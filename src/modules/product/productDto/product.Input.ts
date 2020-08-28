import { Field, InputType } from '@nestjs/graphql';
import {
    MinLength,
    MaxLength,
    IsNotEmpty,
    IsInt,
    IsBoolean,
    IsOptional,
    IsNumber,
    IsString
} from 'class-validator';

@InputType()
export class ProductInput {
    
    @Field({ nullable: false })
    @MinLength(1, { message: 'Title is too short' })
    @MaxLength(50, { message: 'Title is too long' })
    @IsNotEmpty()
    name: string;

    @Field({ nullable: true })
    @MaxLength(150, { message: 'Description is too long' })
    @IsOptional()
    description: string;

    @Field({ nullable: true })
    @IsNumber()
    price: number;

    @Field({ nullable: true })
    @IsBoolean()
    @IsOptional()
    status: boolean;
}

@InputType()
export class NewProductInput {
    
    @Field({ nullable: false })
    @IsInt()
    companyId: number;

    @Field({ nullable: false })
    @MinLength(1, { message: 'Title is too short' })
    @MaxLength(50, { message: 'Title is too long' })
    @IsNotEmpty()
    name: string;

    @Field({ nullable: true })
    @MaxLength(150, { message: 'Description is too long' })
    @IsString()
    @IsOptional()
    description: string;

    @Field({ nullable: true })
    @IsNumber()
    @IsNotEmpty()
    price: number;

    @Field({ nullable: true })
    @IsBoolean()
    @IsOptional()
    status: boolean;
}

@InputType()
export class ProductInputQuery {
    
    @Field({ nullable: true })
    @IsInt()
    @IsOptional()
    companyId: number;

    @Field({ nullable: true }) 
    @IsString()
    @IsOptional()
    name?: string;

    @Field({ nullable: true })
    @MaxLength(150, { message: 'Description is too long' })
    @IsString()
    @IsOptional()
    description?: string;

    @Field({ nullable: true })
    @IsNumber()
    @IsOptional()
    price?: number;

    @Field({ nullable: true })
    @IsBoolean()
    @IsOptional()
    status?: boolean;
}

