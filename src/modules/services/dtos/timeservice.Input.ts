import { Field, InputType } from '@nestjs/graphql';
import {
    IsNotEmpty,
    IsInt,
    IsOptional,
    IsMilitaryTime,
    IsBoolean
} from 'class-validator';
@InputType()
export class NewTimeServiceInput {

    @Field({ nullable: false })
    @IsInt()
    @IsNotEmpty()
    timetableId: number;

    @Field({ nullable: false })
    @IsInt()
    @IsNotEmpty()
    serviceId: number;
    
    @Field({ nullable: false })
    @IsMilitaryTime({ message: 'FORMAT HH:MM' })
    @IsNotEmpty()
    startTime: Date;

    @Field({ nullable: false })
    @IsMilitaryTime({ message: 'FORMAT HH:MM' })
    @IsNotEmpty()
    endTime: Date;

    @Field({ nullable: true })
    @IsBoolean()
    @IsNotEmpty()
    isActive: boolean;

}

@InputType()
export class TimeServiceInput {

    @Field({ nullable: false })
    @IsMilitaryTime({ message: 'FORMAT HH:MM' })
    @IsNotEmpty()
    startTime: Date;

    @Field({ nullable: false })
    @IsMilitaryTime({ message: 'FORMAT HH:MM' })
    @IsNotEmpty()
    endTime: Date;

    @Field({ nullable: true })
    @IsBoolean()
    @IsOptional()
    isActive: boolean;

}

@InputType()
export class TimeServiceInputQuery {

    @Field({ nullable: false })
    @IsInt()
    @IsNotEmpty()
    serviceId: number;

    @Field({ nullable: true })
    @IsBoolean()
    @IsOptional()
    isActive: boolean;
    
}

