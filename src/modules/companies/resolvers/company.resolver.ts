import {
    Args,
    Mutation,
    Query,
    Resolver,
    ResolveField,
    Parent,
} from '@nestjs/graphql';
import { UsePipes, ValidationPipe } from '@nestjs/common';

import { CompanyService } from '../services/company.service';
import { Company } from '../entities/companies.entity';
import { NewCompanyInput, CompanyInput, CompanyInputQuery } from '../dtos/company.Input';

import { ServiceService } from '../../services/services/service.service';
import { Service } from '../../services/entities/service.entity';
import { ServiceInputQuery } from '../../services/dtos/service.Input';

import { EmployeeService } from '../../employees/services/employee.service';
import { Employee } from '../../employees/entities/employee.entity';
import { EmployeeInputQuery } from '../../employees/dtos/employee.Input';

import { TimetableService } from '../../timetables/services/timetable.service';
import { Timetable } from '../../timetables/entities/timetable.entity';
import { TimetableInputQuery } from '../../timetables/dtos/timetable.Input';

import { Location } from '../entities/location.entity';
import { LocationService } from '../services/location.service';

import { Discount } from '../../discounts/entities/discount.entity';
import { DiscountService } from '../../discounts/services/discount.service';
import { DiscountInputQuery } from '../../discounts/dtos/discount.Input';

import { PaginationArgs } from '../../../shared/graphql/variousDto/various.Input';

import { UploadService } from '../../uploads/upload.service'



@Resolver(() => Company)
export class CompanyResolvers {
    constructor(
        private readonly _companyService: CompanyService,
        private readonly _serviceService: ServiceService,
        private readonly _employeeService: EmployeeService,
        private readonly _timetableService: TimetableService,
        private readonly _locationService: LocationService,
        private readonly _discountService: DiscountService,
        private readonly _uploads : UploadService,
    ) {}

    @Query(() => [Company])
    public async getCompanies(
        @Args('input') input?: CompanyInputQuery,
        @Args('pagination') pagination?: PaginationArgs,
    ): Promise<Company[]> {
        return this._companyService.getCompanies(input, pagination);
    }

    @Query(() => [Company])
    public async getCompaniesFollowByUser(
        @Args('userId') userId: number,
    ): Promise<Company[]> {
        return this._companyService.getCompaniesFollowByUser(userId);
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
    public async createCompany(
        @Args('input') input: NewCompanyInput,
    ): Promise<Company> {
        return await this._companyService.createCompany(input);
    }

    @UsePipes(new ValidationPipe())
    @Mutation(() => Company)
    public async updateCompany(
        @Args('id') id: number,
        @Args('input') input: CompanyInput,
        @Args('file') file,
    ): Promise<boolean> {
        if(file){
            let path =  await this._uploads.uploadLogoCompany(file);
            if(input.logo){
                await this._uploads.deleteImageServer(input.logo)
            } 
            input.logo = path;
        }
        return await this._companyService.updateCompany(id,input);
    }

    @Mutation(() => Company)
    public async deleteCompany(@Args('id') id: number): Promise<boolean> {
        return await this._companyService.deleteCompany(id);
    }

    @ResolveField('service', returns => [Service])
    async service(@Parent() company: Company) {
        const { id } = company;
        let input = new ServiceInputQuery();
        input.companyId = id;
        return await this._serviceService.getServices(input);
    }

    @ResolveField('employee', returns => [Employee])
    async employee(@Parent() company: Company) {
        const { id } = company;
        let input = new EmployeeInputQuery();
        input.companyId = id;
        return await this._employeeService.getEmployees(input);
    }

    @ResolveField('timetable', returns => [Timetable])
    async timetable(@Parent() company: Company) {
        const { id } = company;
        let input = new TimetableInputQuery();
        input.companyId = id;
        return await this._timetableService.getTimetable(input);
    }
    
    @ResolveField('location', returns => Location)
    async location(@Parent() company: Company  ) {
       const { id } = company;
       return await this._locationService.getLocation(id);
    }

    @ResolveField('discount', returns => [Discount])
    async discount(@Parent() company: Company  ) {
       const { id } = company;
       let input = new DiscountInputQuery();
       input.companyId = id;
       return await this._discountService.getDiscounts(input);
    }

    // @Subscription(() => Company)
    // countCompany(){

    // }
}
