import { Injectable } from '@nestjs/common';
import { CompanyFollow } from '../entities';
import { CompanyFollowRepository } from '../repositories';
import { CreateCompanyFollowDto, QueryCompanyFollowDto, QueryCompanyUserFollowDto } from '../dtos';

@Injectable()
export class CompanyFollowService {
    constructor(private companyFollogRepository: CompanyFollowRepository) {}

    async getCompanyFollow(dto: QueryCompanyFollowDto): Promise<CompanyFollow[]> {
        return await this.companyFollogRepository.getCompanyFollow(dto);
    }

    async findByCompanyUserExist(dto: QueryCompanyUserFollowDto): Promise<CompanyFollow> {
        return await this.companyFollogRepository.findByCompanyUserExist(dto);
    }

    async createCompanyFollow(dto: CreateCompanyFollowDto): Promise<CompanyFollow> {
        return this.companyFollogRepository.createCompanyFollow(dto);
    }

    async deleteCompanyFollow(userId: number): Promise<boolean> {
        return await this.companyFollogRepository.deleteCompanyFollow(userId);
    }
}
