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
export class EmployeeInput {
    
    @Field({ nullable: false })
    @MinLength(1, { message: 'Title is too short' })
    @MaxLength(50, { message: 'Title is too long' })
    @IsNotEmpty()
    name: string;

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
    @MinLength(1, { message: 'Title is too short' })
    @MaxLength(50, { message: 'Title is too long' })
    @IsNotEmpty()
    name: string;

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

