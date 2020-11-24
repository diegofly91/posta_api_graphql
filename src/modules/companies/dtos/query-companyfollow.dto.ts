import { IsInt, IsOptional } from 'class-validator';

export class QueryCompanyFollowDto {

    @IsInt()
    @IsOptional()
    companyId: number;

    @IsInt()
    @IsOptional()
    userId: number;
}
