import { Injectable } from '@nestjs/common';

import RepoCompany from '../repositories/company.repository';
import { Company } from '../entities';
import { NewCompanyInput, CompanyInput, CompanyInputQuery, UploadFileCompany } from '../dtos/company.Input';
import { PaginationArgs } from '../../../shared/graphql/variousDto/various.Input';

@Injectable()
export class CompanyService {
     constructor(private readonly repo: RepoCompany) {}

    async getCompany(id: number): Promise<Company> {
        return await this.repo.getCompany(id);
    }

    async getCompanies(input?: CompanyInputQuery, pagination?: PaginationArgs): Promise<Company[]> {
        return await this.repo.getCompanies(input, pagination);
    }

    async countCompanies(input?: CompanyInputQuery): Promise<number> {
        return await this.repo.countCompanies(input);
    }

    async createCompany(input: NewCompanyInput): Promise<Company> {
        return await this.repo.createCompany(input);
    }

    async updateCompany(id: number, input: CompanyInput): Promise<boolean> {
        return await this.repo.updateCompany(id,input);
    }

    async deleteCompany(id: number): Promise<boolean> {
        return await this.repo.deleteCompany(id);
    }

    async singleUploadCompany(input:UploadFileCompany): Promise<string> {
        return await this.repo.singleUploadCompany(input);
    }
}
