import { Field, InputType } from '@nestjs/graphql';
import {
    IsNotEmpty,
    IsInt,
    IsOptional,
    IsMilitaryTime,
    IsBoolean
} from 'class-validator';

@InputType()
export class NewTimetableInput {

    @Field({ nullable: false })
    @IsInt()
    @IsNotEmpty()
    companyId: number;

    @Field({ nullable: false })
    @IsInt()
    @IsNotEmpty()
    dayId: number;
    
    @Field({ nullable: false })
    @IsMilitaryTime({ message: 'FORMAT HH:MM' })
    @IsNotEmpty()
    startTime: Date;

    @Field({ nullable: false })
    @IsMilitaryTime({ message: 'FORMAT HH:MM' })
    @IsNotEmpty()
    endTime: Date;

}
@InputType()
export class TimetableInput {

    @Field({ nullable: false })
    @IsInt()
    @IsNotEmpty()
    dayId: number;

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
export class TimetableInputQuery {
    @Field({ nullable: false })
    @IsInt()
    @IsNotEmpty()
    companyId: number;

    @Field({ nullable: true })
    @IsInt()
    @IsOptional()
    dayId: number;

    @Field({ nullable: true })
    @IsBoolean()
    @IsOptional()
    isActive: boolean;
    
}

