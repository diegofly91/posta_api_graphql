import { Field, InputType } from '@nestjs/graphql';
import {
    IsNotEmpty,
    IsInt,
    IsOptional,
    IsMilitaryTime,
    IsBoolean
} from 'class-validator';
@InputType()
export class NewTimeEmployeeInput {

    @Field({ nullable: false })
    @IsInt()
    @IsNotEmpty()
    timetableId: number;

    @Field({ nullable: false })
    @IsInt()
    @IsNotEmpty()
    employeeId: number;
    
    @Field({ nullable: false })
    @IsMilitaryTime({ message: 'FORMAT HH:MM' })
    @IsNotEmpty()
    hini: Date;

    @Field({ nullable: false })
    @IsMilitaryTime({ message: 'FORMAT HH:MM' })
    @IsNotEmpty()
    hend: Date;

    @Field({ nullable: true })
    @IsBoolean()
    @IsNotEmpty()
    status: boolean;

}

@InputType()
export class TimeEmployeeInput {

    @Field({ nullable: false })
    @IsMilitaryTime({ message: 'FORMAT HH:MM' })
    @IsNotEmpty()
    hini: Date;

    @Field({ nullable: false })
    @IsMilitaryTime({ message: 'FORMAT HH:MM' })
    @IsNotEmpty()
    hend: Date;

    @Field({ nullable: true })
    @IsBoolean()
    @IsOptional()
    status: boolean;

}

@InputType()
export class TimeEmployeeInputQuery {

    @Field({ nullable: false })
    @IsInt()
    @IsNotEmpty()
    employeeId: number;

    @Field({ nullable: true })
    @IsBoolean()
    @IsOptional()
    status: boolean;
    
}

