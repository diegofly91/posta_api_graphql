import { Field, InputType } from '@nestjs/graphql';
import {
    MinLength,
    MaxLength,
    IsNotEmpty,
    IsString,
    IsPhoneNumber,
    IsInt,
    IsBoolean,
    IsOptional,
    ValidationArguments
} from 'class-validator';
import {BadRequestException,InternalServerErrorException} from '@nestjs/common';


@InputType()
export class NewCompanyInput {

    @Field({ nullable: false })
    @IsInt()
    @IsNotEmpty()
    categoryId: number;

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
    @IsString({ message: 'must be a valid number' })
    @IsPhoneNumber('CO' ,{
        message: (args: ValidationArguments) => {
            if (args.value.length !== 12) {
                throw new BadRequestException(`${args.value} Invalid MobilePhone Number`);
            } else {
                throw new InternalServerErrorException();
            }
        },
    })
    @IsOptional()
    mobile: string;


    @Field({ nullable: true })
    @IsBoolean()
    @IsOptional()
    status: boolean;
}

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
    @IsString({ message: 'must be a valid number' })
    @IsPhoneNumber('CO' ,{
        message: (args: ValidationArguments) => {
            if (args.value.length !== 12) {
                throw new BadRequestException(`${args.value} Invalid MobilePhone Number`);
            } else {
                throw new InternalServerErrorException();
            }
        },
    })
    @IsOptional()
    mobile: string;


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
    @IsBoolean()
    @IsOptional()
    status: boolean;
}
