import { Args, Mutation, Query, Resolver,ResolveField, Parent, Subscription } from '@nestjs/graphql';
import { UsePipes, ValidationPipe } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.entity';
import { EmployeeInput, NewEmployeeInput, EmployeeInputQuery } from './employeeDto/employee.Input';
import { PaginationArgs } from '../../shared/graphql/variousDto/various.Input';
import { CompanyService } from '../company/company.service';
import { Company } from '../company/company.entity';
import { TimeEmployeeService } from '../timeemployee/timeemployee.service';
import { TimeEmployee } from '../timeemployee/timeemployee.entity';
import { TimeEmployeeInputQuery } from '../timeemployee/timeemployeeDto/timeemployee.Input';

import { ServEmpl } from '../servempl/servempl.entity';
import { ServEmplService } from '../servempl/servempl.service';
import { ServEmplQueryInput } from '../servempl/servemplDto/servempl.Input';

@Resolver(() => Employee)
export class EmployeeResolvers {
    constructor(private readonly _employeeService: EmployeeService,
                private readonly _companyService: CompanyService,
                private readonly _timeemployeeService: TimeEmployeeService,
                private readonly _servemplService: ServEmplService
    ) {}

    @Query(() => Employee, { nullable: true })
    public async getEmployee(@Args('id') id: number): Promise<Employee> {
        return this._employeeService.getEmployee(id);
    }

    @Query(() => [Employee])
    public async getEmployees(@Args('input') input?: EmployeeInputQuery, 
                             @Args('pagination') pagination?: PaginationArgs,
    ): Promise<Employee[]> {
        return this._employeeService.getEmployees(input,pagination);
    }
    
    @Query(() => Number)
    public async countEmployees( @Args('input') input?: EmployeeInputQuery): Promise<number> {
        return this._employeeService.countEmployees(input);
    }

    @UsePipes(new ValidationPipe())
    @Mutation(() => Employee, { nullable: true })
    public async createEmployee( @Args('input') input: NewEmployeeInput): Promise<Employee> {
        return await this._employeeService.createEmployee(input);
    }

    @UsePipes(new ValidationPipe())
    @Mutation(() => Employee)
    public async updateEmployee( @Args('id') id: number,  @Args('input') input: EmployeeInput): Promise<boolean> {
        return await this._employeeService.updateEmployee(id, input);
    }

    @Mutation(() => Employee)
    public async deleteEmployee(@Args('id') id: number): Promise<boolean> {
        return await this._employeeService.deleteEmployee(id);
    }

    @ResolveField('company', returns => Company)
    async company(@Parent() employee) {
        const { companyId } = employee;
        return await this._companyService.getCompany(companyId);
    }
    
    @ResolveField('timeemployee', returns => TimeEmployee)
    async timeemployee(@Parent() employee) {
        const { id } = employee;
        const input = new TimeEmployeeInputQuery();
        input.employeeId = id;
        return await this._timeemployeeService.getTimeEmployee(input);
    }

    @ResolveField('servempls', returns => ServEmpl)
    async servempls(@Parent() employee) {
        const { id } = employee;
        const input = new ServEmplQueryInput();
        input.employeeId = id;
        return await this._servemplService.getServEmpl(input);
    }

    // @Subscription(() => Service)
    // countService(){

    // }
}
