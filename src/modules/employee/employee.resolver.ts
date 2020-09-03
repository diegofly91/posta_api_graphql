import { Args, Mutation, Query, Resolver,ResolveField, Parent, Subscription } from '@nestjs/graphql';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.entity';
import { EmployeeInput, NewEmployeeInput,EmployeeInputQuery } from './employeeDto/employee.Input';
import { PaginationArgs } from '../../shared/graphql/variousDto/various.Input';
import { UsePipes, ValidationPipe } from '@nestjs/common';
import { CompanyService } from '../company/company.service';
import { Company } from '../company/company.entity';

@Resolver(() => Employee)
export class EmployeeResolvers {
    constructor(private readonly _employeeService: EmployeeService,
                private readonly _companyService: CompanyService
    ) {}

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

    @Query(() => Employee, { nullable: true })
    public async getEmployee(@Args('id') id: number): Promise<Employee> {
        return this._employeeService.getEmployee(id);
    }

    @UsePipes(new ValidationPipe())
    @Mutation(() => Employee, { nullable: true })
    public async createService( @Args('input') input: NewEmployeeInput,): Promise<Employee> {
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
        const { id_company } = employee;
        return await this._companyService.getCompany(id_company);
    }

    // @Subscription(() => Service)
    // countService(){

    // }
}
