import {
    Args,
    Mutation,
    Query,
    Resolver,
    ResolveField,
    Parent,
    Subscription,
} from '@nestjs/graphql';
import { ServiceService } from './service.service';
import { Service } from './entities/service.entity';
import {
    ServiceInput,
    NewServiceInput,
    ServiceInputQuery,
} from './dtos/service.Input';
import { PaginationArgs } from '../../shared/graphql/variousDto/various.Input';
import { UsePipes, ValidationPipe } from '@nestjs/common';
import { CompanyService } from '../company/company.service';
import { Company } from '../company/entities/company.entity';
import { TimeServiceService } from '../timeservice/timeservice.service';
import { TimeService } from '../timeservice/entities/timeservice.entity';
import { TimeServiceInputQuery } from '../timeservice/dtos/timeservice.Input';
import { ServEmpl } from '../servempl/entities/servempl.entity';
import { ServEmplService } from '../servempl/servempl.service';
import { ServEmplQueryInput } from '../servempl/dtos/servempl.Input';


@Resolver(() => Service)
export class ServiceResolvers {
    constructor(private readonly _serviceService: ServiceService,
                private readonly _timeserviceService: TimeServiceService,
                private readonly _companyService: CompanyService,
                private readonly _servemplService: ServEmplService
    ) {}

    @Query(() => [Service])
    public async getServices(
        @Args('input') input?: ServiceInputQuery,
        @Args('pagination') pagination?: PaginationArgs,
    ): Promise<Service[]> {
        return this._serviceService.getServices(input, pagination);
    }

    @Query(() => Number)
    public async countServices(
        @Args('input') input?: ServiceInputQuery,
    ): Promise<number> {
        return this._serviceService.countServices(input);
    }

    @Query(() => Service, { nullable: true })
    public async getService(@Args('id') id: number): Promise<Service> {
        return this._serviceService.getService(id);
    }

    @UsePipes(new ValidationPipe())
    @Mutation(() => Service, { nullable: true })
    public async createService(
        @Args('input') input: NewServiceInput,
    ): Promise<Service> {
        return await this._serviceService.createService(input);
    }

    @UsePipes(new ValidationPipe())
    @Mutation(() => Service)
    public async updateService(
        @Args('id') id: number,
        @Args('input') input: ServiceInput,
    ): Promise<boolean> {
        return await this._serviceService.updateService(id, input);
    }

    @Mutation(() => Service)
    public async deleteService(@Args('id') id: number): Promise<boolean> {
        return await this._serviceService.deleteService(id);
    }

    @ResolveField('company', returns => Company)
    async company(@Parent() service) {
        const { id_company } = service;
        return await this._companyService.getCompany(id_company);
    }

    @ResolveField('timeservice', returns => TimeService)
    async timeservice(@Parent() service) {
        const { id } = service;
        const input = new TimeServiceInputQuery();
        input.serviceId = id;
        return await this._timeserviceService.getTimeService(input);
    }

    @ResolveField('servempls', returns => ServEmpl)
    async servempls(@Parent() service) {
        const { id } = service;
        const input = new ServEmplQueryInput();
        input.serviceId = id;
        return await this._servemplService.getServEmpl(input);
    }

    // @Subscription(() => Service)
    // countService(){

    // }
}
