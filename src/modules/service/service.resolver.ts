import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { ServiceService } from './service.service';
import { Service } from './service.entity';
import { ServiceInput } from './serviceDto/service.Input';
// import { PaginationArgs } from '../../shared/graphql/variousDto/various.Input';
import { UsePipes, ValidationPipe } from '@nestjs/common';

@Resolver(() => Service)
export class ServiceResolvers {
    constructor(private readonly _serviceService: ServiceService) {}

    // @Query(() => [Service])
    // public async getServices(
    //     @Args('pagination') pagination?: PaginationArgs,
    // ): Promise<Service[]> {
    //     return this._serviceService.getServices(pagination);
    // }
    @Query(() => [Service])
    public async getServices(): Promise<Service[]> {
        return this._serviceService.getServices();
    }

    @Query(() => Number)
    public async countServices(
        @Args('status') status?: boolean,
    ): Promise<number> {
        return this._serviceService.countServices(status);
    }

    @Query(() => Service, { nullable: true })
    public async getService(@Args('id') id: number): Promise<Service> {
        return this._serviceService.getService(id);
    }

    @UsePipes(new ValidationPipe({ disableErrorMessages: true }))
    @Mutation(() => Service, { nullable: true })
    public async createService(
        @Args('input') input: ServiceInput,
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

    // @Subscription(() => Service)
    // countService(){

    // }
}
