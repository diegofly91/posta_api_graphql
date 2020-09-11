import { Field, InputType } from '@nestjs/graphql';
import {BadRequestException,InternalServerErrorException} from '@nestjs/common';
import {
    MinLength,
    MaxLength,
    IsNotEmpty,
    IsInt,
    IsBoolean,
    IsOptional,
    IsPhoneNumber,
    IsString,
    ValidationArguments
} from 'class-validator';

@InputType()
export class EmployeeInput {
    
    @Field({ nullable: false })
    @MinLength(1, { message: 'name is too short' })
    @MaxLength(30, { message: 'name is too long' })
    @IsNotEmpty()
    name: string;

    @Field({ nullable: true })
    @MinLength(1, { message: 'lastname is too short' })
    @MaxLength(30, { message: 'lastname is too long' })
    @IsOptional()
    lastname: string;

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
    status: boolean;
}

@InputType()
export class NewEmployeeInput {
    
    @Field({ nullable: false })
    @IsInt()
    companyId: number;

    @Field({ nullable: false })
    @MinLength(1, { message: 'name is too short' })
    @MaxLength(30, { message: 'name is too long' })
    @IsNotEmpty()
    name: string;

    @Field({ nullable: true })
    @MinLength(1, { message: 'lastname is too short' })
    @MaxLength(30, { message: 'lastname is too long' })
    @IsOptional()
    lastname: string;

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
export class EmployeeInputQuery {
    
    @Field({ nullable: true })
    @IsInt()
    @IsOptional()
    companyId: number;

    @Field({ nullable: true }) 
    @IsString()
    @IsOptional()
    name?: string;

    @Field({ nullable: true })
    @IsBoolean()
    @IsOptional()
    status?: boolean;
}

