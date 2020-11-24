import { EntityRepository,Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import { CompanyFollow } from '../entities';
import { CreateCompanyFollowDto, QueryCompanyFollowDto, QueryCompanyUserFollowDto } from '../dtos';

@EntityRepository(CompanyFollow)
export class CompanyFollowRepository extends Repository<CompanyFollow> {

    async findOneById(id: number): Promise<CompanyFollow> {
        const companyFollow = await this.findOne(id);
        // if (!companyFollow) throw new NotFoundException('No existe la localizacion empresa');
        return companyFollow;
    }

    async getCompanyFollow(dto: QueryCompanyFollowDto): Promise<CompanyFollow[]> {
        return await this.find(dto);
    }

    async findByCompanyUserExist(dto: QueryCompanyUserFollowDto): Promise<CompanyFollow> {
        return await this.findOne(dto);
    }

    async createCompanyFollow(dto: CreateCompanyFollowDto): Promise<CompanyFollow> {
        const existCompanyFollow = await this.findByCompanyUserExist(dto);
        if (existCompanyFollow != undefined) throw new NotFoundException('El usuario ya sigue la empresa');
        const companyFollow = this.create(dto);
        return await this.save(companyFollow);
    }

    async deleteCompanyFollow(id: number): Promise<boolean> {
        const companyFollow =  await this.delete(id);
        return true
    }
    
}
