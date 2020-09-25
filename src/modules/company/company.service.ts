import { Injectable, NotFoundException } from '@nestjs/common';

import RepoCompany from './company.repository';
import { Company } from './entities';
import { CompanyInput, CompanyInputQuery } from './dtos';
import { PaginationArgs } from '../../shared/graphql/variousDto/various.Input';

@Injectable()
export class CompanyService {
    constructor(private readonly repos: RepoCompany) {}

    async getCompany(id: number): Promise<Company> {
        return await this.repos._companyRepository.findOne(id);
    }

    async getCompanies(
        input?: CompanyInputQuery,
        pagination?: PaginationArgs,
    ): Promise<Company[]> {
        let inputData = input ? input : {};
        if (pagination) {
            const { limit, offset } = pagination;
            return await this.repos._companyRepository.find({
                where: inputData,
                take: limit,
                skip: offset,
            });
        } else
            return await this.repos._companyRepository.find({
                where: inputData,
            });
    }

    async countCompanies(input?: CompanyInputQuery): Promise<number> {
        if (input) {
            return await this.repos._companyRepository.count({ where: input });
        } else {
            return await this.repos._companyRepository.count();
        }
    }

    async createCompany(input: CompanyInput): Promise<Company> {
        const savedCompany: Company = await this.repos._companyRepository.save(
            input,
        );
        return savedCompany;
    }

    async updateCompany(id: number, input: CompanyInput): Promise<boolean> {
        const company = await this.repos._companyRepository.update(id, input);
        if (company) {
            return true;
        } else {
            throw new NotFoundException();
        }
    }

    async deleteCompany(id: number): Promise<boolean> {
        const dele = await this.repos._companyRepository.delete(id);
        if (dele) {
            return true;
        } else {
            throw new NotFoundException();
        }
    }
}
