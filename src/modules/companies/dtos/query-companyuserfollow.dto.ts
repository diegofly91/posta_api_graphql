import { IsInt, IsNotEmpty } from 'class-validator';

export class QueryCompanyUserFollowDto {

    @IsInt()
    @IsNotEmpty()
    companyId: number;

    @IsInt()
    @IsNotEmpty()
    userId: number;
}
