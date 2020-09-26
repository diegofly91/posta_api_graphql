import { Field, InputType } from '@nestjs/graphql';
import {
    IsNumber,
    IsLatitude, 
    IsLongitude,
    IsNotEmpty,
    IsInt,
} from 'class-validator';


@InputType()
export class NewLocationInput {

    @Field({ nullable: false })
    @IsInt()
    @IsNotEmpty()
    companyId: number;

    @Field({ nullable: false })
    @IsLatitude()
    @IsNumber()
    @IsNotEmpty()
    lat: number;

    @Field({ nullable: false })
    @IsLongitude()
    @IsNumber()
    @IsNotEmpty()
    lng: number;

}

@InputType()
export class LocationInput {

    @Field({ nullable: false })
    @IsLatitude()
    @IsNumber()
    @IsNotEmpty()
    lat: number;

    @Field({ nullable: false })
    @IsLongitude()
    @IsNumber()
    @IsNotEmpty()
    lng: number;

}