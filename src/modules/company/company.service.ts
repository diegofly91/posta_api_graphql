import {
    Injectable,
    BadRequestException,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './company.entity';
import { CompanyInput, PaginationArgs } from './companyDto/company.Input';

@Injectable()
export class CompanyService {
    constructor(
        @InjectRepository(Company)
        private _companyRepository: Repository<Company>,
    ) {}

    async getCompany(id: number): Promise<Company> {
        return await this._companyRepository.findOne(id);
    }

    async getCompanys(pagination?: PaginationArgs ): Promise<Company[]> {
        if(pagination){
            const {limit, offset } = pagination;
           return await this._companyRepository.find({take: limit, skip: offset});
        }else
           return await this._companyRepository.find();
    }

    async countCompanys(status?: boolean ): Promise<number> {
        if(status != null)
           return await this._companyRepository.count({where:{status}});
        else
           return await this._companyRepository.count();
    }

    async createCompany(input: CompanyInput): Promise<Company> {
        const savedCompany: Company = await this._companyRepository.save(input);
        return savedCompany;
    }

    async updateCompany(id: number, input: CompanyInput): Promise<boolean> {
        const company = await this._companyRepository.update(id, input);
        if (company) return true;
        else throw new NotFoundException();
    }
    
    async deleteCompany(id: number): Promise<boolean> {
        const dele = await this._companyRepository.delete(id);
        if (dele) return true;
        else throw new NotFoundException();
    }
}