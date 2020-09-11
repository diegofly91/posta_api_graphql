import { Args, Mutation, Query, Resolver, Subscription, ResolveProperty, Parent } from '@nestjs/graphql';
import { UsePipes, ValidationPipe } from '@nestjs/common';

import { CompanyService } from './company.service';
import { Company } from './company.entity';
import { CompanyInput, CompanyInputQuery } from './companyDto/company.Input';

import { ServiceService } from '../service/service.service';
import { Service } from '../service/service.entity';
import { ServiceInputQuery } from '../service/serviceDto/service.Input';

import { EmployeeService } from '../employee/employee.service';
import { Employee } from '../employee/employee.entity';
import { EmployeeInputQuery } from '../employee/employeeDto/employee.Input';

import { TimetableService } from '../timetable/timetable.service';
import { Timetable } from '../timetable/timetable.entity';
import { TimetableInputQuery } from '../timetable/timetableDto/timetable.Input';

import { PaginationArgs } from '../../shared/graphql/variousDto/various.Input';

@Resolver(() => Company)
export class CompanyResolvers {
    
    constructor(
        private readonly _companyService: CompanyService,
        private readonly _serviceService: ServiceService,
        private readonly _employeeService: EmployeeService,
        private readonly _timetableService: TimetableService,
    ) {}

    @Query(() => [Company])
    public async getCompanies(
        @Args('input') input?: CompanyInputQuery, 
        @Args('pagination') pagination?: PaginationArgs,
    ): Promise<Company[]> {
        return this._companyService.getCompanies(input,pagination);
    }

    @Query(() => Number)
    public async countCompanies(
        @Args('input') input?: CompanyInputQuery,
    ): Promise<number> {
        return this._companyService.countCompanies(input);
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
       input.companyId = id;
       return await this._serviceService.getServices(input);
    }

    @ResolveProperty('employee', returns => [Employee])
    async employee(@Parent() company: Company  ) {
       const { id } = company;
       let input = new EmployeeInputQuery();
       input.companyId = id;
       return await this._employeeService.getEmployees(input);
    }

    @ResolveProperty('timetable', returns => [Timetable])
    async timetable(@Parent() company: Company  ) {
       const { id } = company;
       let input = new TimetableInputQuery();
       input.companyId = id;
       return await this._timetableService.getTimetable(input);
    }

    // @Subscription(() => Company)
    // countCompany(){

    // }
}
