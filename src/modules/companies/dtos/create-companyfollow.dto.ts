import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateCompanyFollowDto {

    @IsInt()
    @IsNotEmpty()
    companyId: number;

    @IsInt()
    @IsNotEmpty()
    userId: number;
}
