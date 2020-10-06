import { IsNotEmpty, IsString, MaxLength, IsInt, IsOptional } from 'class-validator';

export class CreateCategoryDto {
    @MaxLength(30, { message: 'The name is too long.' })
    @IsNotEmpty({ message: 'The name is cannot be empty.' })
    @IsString()
    name: String;

    @MaxLength(150, { message: 'The description is too long.' })
    @IsString()
    description: String;

    // @IsInt()
    // @IsOptional()
    // employeeId: number;
}

export class UpdateCategoryDto {
    @MaxLength(30, { message: 'The name is too long.' })
    @IsNotEmpty({ message: 'The name is cannot be empty.' })
    @IsString()
    name: String;

    @MaxLength(150, { message: 'The description is too long.' })
    @IsString()
    description: String;

    // @IsInt()
    // @IsOptional()
    // employeeId: number;
}
