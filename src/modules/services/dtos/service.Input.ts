import { Field, InputType } from '@nestjs/graphql';
import {
    MinLength,
    MaxLength,
    IsNotEmpty,
    IsInt,
    Min, Max,
    IsBoolean,
    IsOptional,
    IsNumber,
    IsString
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

    @Field({ nullable: false })
    @IsInt()
    duration: number;

    @Field({ nullable: true })
    @IsNumber()
    @IsOptional()
    price: number;

    @Field({ nullable: false })
    @IsBoolean()
    isActive: boolean;

    @Field({ nullable: false })
    @IsBoolean()
    isNeedEmployee: boolean;

    @Field({ nullable: true })
    @IsInt()
    @Min(1)
    @Max(10)
    @IsOptional()
    quantityPost: number;

    @Field({ nullable: true })
    @MaxLength(120, { message: 'name Image is too long' })
    @IsOptional()
    logo:  string;
}

@InputType()
export class NewServiceInput {
    
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
    @IsInt()
    @IsNotEmpty()
    duration: number;

    @Field({ nullable: true })
    @IsNumber()
    @IsOptional()
    price: number;

    @Field({ nullable: true })
    @IsBoolean()
    @IsOptional()
    isActive: boolean;

    @Field({ nullable: false })
    @IsBoolean()
    isNeedEmployee: boolean;

    @Field({ nullable: true })
    @IsInt()
    @Min(1)
    @Max(10)
    @IsOptional()
    quantityPost: number;

    @Field({ nullable: true })
    @MaxLength(120, { message: 'name Image is too long' })
    @IsOptional()
    logo:  string;
}

@InputType()
export class ServiceInputQuery {
    
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
    @IsInt()
    @IsOptional()
    duration?: number;

    @Field({ nullable: true })
    @IsNumber()
    @IsOptional()
    price?: number;

    @Field({ nullable: true })
    @IsBoolean()
    @IsOptional()
    isActive?: boolean;

    @Field({ nullable: true })
    @IsBoolean()
    @IsOptional()
    isNeedEmployee?: boolean;
}

