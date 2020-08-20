import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { CompanyService } from './company.service';
import { Company } from './company.entity';
import { CompanyInput,  } from './companyDto/company.Input';
import { PaginationArgs } from '../../shared/graphql/variousDto/various.Input';
import { UsePipes, ValidationPipe } from '@nestjs/common';

@Resolver(() => Company)
export class CompanyResolvers {
    constructor(private readonly _companyService: CompanyService) {}

    @Query(() => [Company])
    public async getCompanys(@Args('pagination') pagination ?: PaginationArgs): Promise<Company[]> {
        return this._companyService.getCompanys(pagination);
    }

    @Query(() => Number)
    public async countCompanys(@Args('status') status?: boolean): Promise<number> {
        return this._companyService.countCompanys(status);
    }

    @Query(() => Company, { nullable: true })
    public async getCompany(@Args('id') id: number): Promise<Company> {
        return this._companyService.getCompany(id);
    }

    @UsePipes(new ValidationPipe())
    @Mutation(() => Company, { nullable: true })
    public async createCompany(@Args('input') input: CompanyInput): Promise<Company> {
        return await this._companyService.createCompany(input);
    }

    @UsePipes(new ValidationPipe())
    @Mutation(() => Company)
    public async updateCompany(
        @Args('id') id: number,
        @Args('input') input: CompanyInput,
    ): Promise<boolean> {
        return await this._companyService.updateCompany(id, input);
    }

    @Mutation(() => Company)
    public async deleteCompany(@Args('id') id: number): Promise<boolean> {
        return await this._companyService.deleteCompany(id);
    }

    // @Subscription(() => Company)
    // countCompany(){

    // }
}
