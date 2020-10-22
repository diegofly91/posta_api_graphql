import { Image } from '../../../shared/Scalars/Image.scalar'
import { Field, InputType  } from '@nestjs/graphql';
import {
    MinLength,
    MaxLength,
    IsNotEmpty,
    IsString,
    IsPhoneNumber,
    IsInt,
    ValidateNested,
    IsBoolean,
    IsOptional,
    ValidationArguments
} from 'class-validator';
import { Type, Exclude } from 'class-transformer';
import { GraphQLUpload } from "apollo-server-express";
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

    @Field({ nullable: false })
    @IsInt()
    @IsNotEmpty()
    userId: number;

    @Field({ nullable: true })
    @IsBoolean()
    @IsOptional()
    isActive: boolean;

    @Field({ nullable: true })
    @MaxLength(120, { message: 'name Image is too long' })
    @IsOptional()
    logo:  string;
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
    isActive: boolean;

    @Field({ nullable: true })
    @MaxLength(120, { message: 'name Image is too long' })
    @IsOptional()
    logo:  string;
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
    isActive: boolean;
}

@InputType()
export class UploadFileCompany {

    @Field({ nullable: false })
    @IsInt()
    @IsNotEmpty()
    id: number;

    @Field()
    @ValidateNested()
    @Type(() => Image) 
    file:  Image;
}
