import { Args, Mutation, Query, Resolver, Subscription, ResolveProperty, Parent } from '@nestjs/graphql';
import { UsePipes, ValidationPipe } from '@nestjs/common';

import { CompanyService } from './company.service';
import { Company } from './company.entity';
import { CompanyInput, CompanyInputQuery } from './companyDto/company.Input';

import { ServiceService } from '../service/service.service';
import { Service } from '../service/service.entity';
import { ServiceInputQuery } from '../service/serviceDto/service.input';

import { PaginationArgs } from '../../shared/graphql/variousDto/various.Input';

@Resolver(() => Company)
export class CompanyResolvers {
    constructor(
        private readonly _companyService: CompanyService,
        private readonly _serviceService: ServiceService,
        ) {}

    @Query(() => [Company])
    public async getCompanys(
        @Args('input') input?: CompanyInputQuery, 
        @Args('pagination') pagination?: PaginationArgs,
    ): Promise<Company[]> {
        return this._companyService.getCompanys(input,pagination);
    }

    @Query(() => Number)
    public async countCompanys(
        @Args('input') input?: CompanyInputQuery,
    ): Promise<number> {
        return this._companyService.countCompanys(input);
    }

    @Query(() => Company, { nullable: true })
    public async getCompany(@Args('id') id: number): Promise<Company> {
        return this._companyService.getCompany(id);
    }

    @UsePipes(new ValidationPipe())
    @Mutation(() => Company, { nullable: true })
    public async createCompany( @Args('input') input: CompanyInput ): Promise<Company> {
        return await this._companyService.createCompany(input);
    }

    @UsePipes(new ValidationPipe())
    @Mutation(() => Company)
    public async updateCompany( @Args('id') id: number, 
                                @Args('input') input: CompanyInput): Promise<boolean> {
        return await this._companyService.updateCompany(id, input);
    }

    @Mutation(() => Company)
    public async deleteCompany(@Args('id') id: number): Promise<boolean> {
        return await this._companyService.deleteCompany(id);
    }

    @ResolveProperty('service', returns => [Service])
    async service(@Parent() company: Company  ) {
       const { id } = company;
       let input = new ServiceInputQuery();
       input.id_company = id;
       return await this._serviceService.getServices(input);
    }

    // @Subscription(() => Company)
    // countCompany(){

    // }
}
