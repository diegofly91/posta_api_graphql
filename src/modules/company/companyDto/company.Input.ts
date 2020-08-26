import { Field, InputType } from '@nestjs/graphql';
import {
    Length,
    IsEmail,
    MinLength,
    MaxLength,
    IsNotEmpty,
    IsString,
    IsInt,
    IsBoolean,
    IsOptional
} from 'class-validator';

@InputType()
export class CompanyInput {
    @Field({ nullable: false })
    @MinLength(1, { message: 'Title is too short' })
    @MaxLength(50, { message: 'Title is too long' })
    @IsNotEmpty()
    @IsString()
    name: string;

    @Field({ nullable: true })
    @MaxLength(150, { message: 'Description is too long' })
    @IsOptional()
    description: string;

    @Field({ nullable: true })
    @MaxLength(100, { message: 'Address is too long' })
    @IsOptional()
    address: string;

    @Field({ nullable: true })
    @IsInt()
    @IsOptional()
    phone: number;

    @Field({ nullable: true })
    @IsBoolean()
    @IsOptional()
    status: boolean;
}

@InputType()
export class CompanyInputQuery {
 
    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    name: string;

    @Field({ nullable: true })
    @MaxLength(150, { message: 'Description is too long' })
    @IsString()
    @IsOptional()
    description: string;

    @Field({ nullable: true })
    @MaxLength(100, { message: 'Address is too long' })
    @IsString()
    @IsOptional()
    address: string;

    @Field({ nullable: true })
    @IsInt()
    @IsOptional()
    phone: number;

    @Field({ nullable: true })
    @IsBoolean()
     @IsOptional()
    status: boolean;
}
