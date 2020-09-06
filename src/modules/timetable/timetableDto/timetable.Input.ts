import { Field, InputType } from '@nestjs/graphql';
import {
    IsNotEmpty,
    IsInt,
    IsOptional,
    IsMilitaryTime
} from 'class-validator';

@InputType()
export class TimetableInput {

    @Field({ nullable: false })
    @IsInt()
    @IsNotEmpty()
    dayId: number;

    @Field({ nullable: false })
    @IsMilitaryTime({ message: 'FORMAT HH:MM' })
    @IsNotEmpty()
    hini: Date;

    @Field({ nullable: false })
    @IsMilitaryTime({ message: 'FORMAT HH:MM' })
    @IsNotEmpty()
    hend: Date;
}

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
    hini: Date;

    @Field({ nullable: false })
    @IsMilitaryTime({ message: 'FORMAT HH:MM' })
    @IsNotEmpty()
    hend: Date;


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
    
}

