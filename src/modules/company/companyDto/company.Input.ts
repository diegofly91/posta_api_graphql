import { Field, InputType, ArgsType, Int } from '@nestjs/graphql';
import {
    Length,
    IsEmail,
    MinLength,
    MaxLength,
    IsNotEmpty,
    IsEmpty,
    IsInt,
    IsBoolean,
} from 'class-validator';

@ArgsType()
export class PaginationArgs {
  @Field({nullable: true})
  offset?: number;

  @Field({nullable: true})
  limit?: number;
}

@InputType()
export class CompanyInput {
    @Field({ nullable: false })
    @MinLength(1, { message: 'Title is too short' })
    @MaxLength(50, { message: 'Title is too long' })
    @IsNotEmpty()
    name: string;

    @Field({ nullable: true })
    @MaxLength(150, { message: 'Title is too long' })
    description?: string;

    @Field({ nullable: true })
    @MaxLength(100, { message: 'Title is too long' })
    address: string;

    @Field({ nullable: true })
    @IsBoolean()
    status: boolean;
}