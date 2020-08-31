import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './company.entity';
import { CompanyInput, CompanyInputQuery } from './companyDto/company.Input';
import { PaginationArgs } from '../../shared/graphql/variousDto/various.Input';

@Injectable()
export class CompanyService {
    constructor(
        @InjectRepository(Company)
        private _companyRepository: Repository<Company>,
    ) {}

    async getCompany(id: number): Promise<Company> {
        return await this._companyRepository.findOne(id);
    }

    async getCompanys(input?: CompanyInputQuery, pagination?: PaginationArgs): Promise<Company[]> {
        let inputData = input? input : {};
        if (pagination) {
            const { limit, offset } = pagination;
            return await this._companyRepository.find({
                where: inputData,
                take: limit,
                skip: offset,
            });
        } else return await this._companyRepository.find({where: inputData});
    }

    async countCompanys(input?: CompanyInputQuery): Promise<number> {
        if (input){
            return await this._companyRepository.count({ where: input });
        }else {
            return await this._companyRepository.count();
        }
    }

    async createCompany(input: CompanyInput): Promise<Company> {
        const savedCompany: Company = await this._companyRepository.save(input);
        return savedCompany;
    }

    async updateCompany(id: number, input: CompanyInput): Promise<boolean> {
        const company = await this._companyRepository.update(id, input);
        if (company) {
            return true;
        }else {
            throw new NotFoundException();
        } 
    }

    async deleteCompany(id: number): Promise<boolean> {
        const dele = await this._companyRepository.delete(id);
        if (dele) {
            return true;
        }else {
            throw new NotFoundException();
        }
    }
}
