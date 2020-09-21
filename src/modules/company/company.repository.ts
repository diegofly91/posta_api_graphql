import {  NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './company.entity';
import { CompanyInput, CompanyInputQuery } from './companyDto/company.Input';
import { PaginationArgs } from '../../shared/graphql/variousDto/various.Input';


@EntityRepository()
class RepoCompany {
  public constructor(
    @InjectRepository(Company) public readonly _companyRepository: Repository<Company>,
  ) {}

    async getCompany(id: number): Promise<Company> {
        return await this._companyRepository.findOne(id);
    }

    async getCompanies(input?: CompanyInputQuery, pagination?: PaginationArgs): Promise<Company[]> {
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

    async countCompanies(input?: CompanyInputQuery): Promise<number> {
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

export default RepoCompany;
