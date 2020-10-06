import { Args, Mutation, Query, Resolver,ResolveField, Parent, Subscription } from '@nestjs/graphql';
import { UsePipes, ValidationPipe } from '@nestjs/common';

import { ServEmplQueryInput, NewServEmplInput} from '../dtos/servempl.Input';
import { ServEmpl } from '../entities/servempl.entity';
import { ServEmplService } from '../services/servempl.service';

import { Service } from '../entities/service.entity';
import { ServiceService } from '../services/service.service';

import { Employee } from '../../employees/entities/employee.entity';
import { EmployeeService } from '../../employees/services/employee.service';

@Resolver(() => ServEmpl)
export class ServEmplResolvers {
    constructor(private readonly _serviceServEmpl: ServEmplService,
                private readonly _serviceService: ServiceService,
                private readonly _employeeService: EmployeeService) {}

    @Query(() => ServEmpl, { nullable: true })
    public async getServEmpl(@Args('input') input: ServEmplQueryInput): Promise<ServEmpl[]> {
        return this._serviceServEmpl.getServEmpl(input);
    }

    @UsePipes(new ValidationPipe())
    @Mutation(() => ServEmpl, { nullable: true })
    public async createServEmpl( @Args('input') input: NewServEmplInput): Promise<boolean> {
        return await this._serviceServEmpl.createServEmpl(input);
    }

    @Mutation(() => ServEmpl, { nullable: true })
    public async deleteServEmpl( @Args('id') id: number): Promise<boolean> {
        return await this._serviceServEmpl.deleteServEmpl(id);
    }

    @ResolveField('service', returns => Service)
    async service(@Parent() servempl) {
        const { serviceId } = servempl;
        return await this._serviceService.getService(serviceId);
    }

    @ResolveField('employee', returns => Employee)
    async employee(@Parent() servempl) {
        const { employeeId } = servempl;
        return await this._employeeService.getEmployee(employeeId);
    }

}

