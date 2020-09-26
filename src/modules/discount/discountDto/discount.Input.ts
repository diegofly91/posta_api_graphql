import { Field, InputType } from '@nestjs/graphql';
import {
    MinLength,
    MaxLength,
    IsNotEmpty,
    IsInt,
    Min,Max,
    IsBoolean,
    IsOptional,
    IsDate,
    IsString,
} from 'class-validator';

@InputType()
export class NewDiscountInput {

    @Field({ nullable: false })
    @IsInt()
    companyId: number;

    @Field({ nullable: false })
    @MinLength(4, { message: 'name is too short' })
    @MaxLength(50, { message: 'name is too long' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @Field({ nullable: true })
    @MaxLength(200, { message: 'lastname is too long' })
    @IsString()
    @IsOptional()
    description: string;

    @Field({ nullable: false })
    @IsInt()
    @Min(1)
    @Max(100)
    discount: number;

    @Field({ nullable: true })
    @IsDate()
    @IsOptional()
    dateIni: Date;

    @Field({ nullable: true })
    @IsDate()
    @IsOptional()
    dateEnd: Date;

    @Field({ nullable: true })
    @IsBoolean()
    @IsOptional()
    status: boolean;

}

@InputType()
export class DiscountInput {

    @Field({ nullable: false })
    @MinLength(4, { message: 'name is too short' })
    @MaxLength(50, { message: 'name is too long' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @Field({ nullable: true })
    @MaxLength(200, { message: 'lastname is too long' })
    @IsString()
    @IsOptional()
    description: string;

    @Field({ nullable: false })
    @IsInt()
    @Min(1)
    @Max(100)
    discount: number;

    @Field({ nullable: true })
    @IsDate()
    @IsOptional()
    dateIni: Date;

    @Field({ nullable: true })
    @IsDate()
    @IsOptional()
    dateEnd: Date;

    @Field({ nullable: true })
    @IsBoolean()
    @IsOptional()
    status: boolean;

}

@InputType()
export class DiscountInputQuery {

    @Field({ nullable: true })
    @IsInt()
    @IsOptional()
    companyId: number;

    @Field({ nullable: true })
    @IsDate()
    @IsOptional()
    dateIni: Date;

    @Field({ nullable: true })
    @IsDate()
    @IsOptional()
    dateEnd: Date;

    @Field({ nullable: true })
    @IsBoolean()
    @IsOptional()
    status: boolean;

}
