import { Field, InputType } from '@nestjs/graphql';
import {
    IsInt,
    IsOptional,
} from 'class-validator';

@InputType()
export class NewServEmplInput {

    @Field({ nullable: false })
    @IsInt()
    serviceId: number;

    @Field({ nullable: false })
    @IsInt()
    employeeId: number;
}

@InputType()
export class ServEmplQueryInput {

    @Field({ nullable: true })
    @IsInt()
    @IsOptional()
    serviceId: number;

    @Field({ nullable: true })
    @IsInt()
    @IsOptional()
    employeeId: number;
}
