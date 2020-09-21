import { Args, Mutation, Query, Resolver,ResolveField, Parent } from '@nestjs/graphql';
import { UsePipes, ValidationPipe } from '@nestjs/common';

import { NewLocationInput, LocationInput} from './locationDto/location.Input';
import { Location } from './location.entity';
import { LocationService }  from './location.service';

@Resolver(() => Location)
export class LocationResolvers {
    constructor(private readonly _locationService: LocationService,
    ) {}

    @Query(() => Location, { nullable: true })
    public async getLocation(@Args('companyId') companyId: number): Promise<Location> {
        return this._locationService.getLocation(companyId);
    }

    @UsePipes(new ValidationPipe())
    @Mutation(() => Location, { nullable: true })
    public async createLocation( @Args('input') input: NewLocationInput): Promise<boolean> {
        return await this._locationService.createLocation(input);
    }

    @UsePipes(new ValidationPipe())
    @Mutation(() => Location)
    public async updateLocation( @Args('id') id: number,  @Args('input') input: LocationInput): Promise<boolean> {
        return await this._locationService.updateLocation(id, input);
    }

    @Mutation(() => Location)
    public async deleteLocation(@Args('id') id: number): Promise<boolean> {
        return await this._locationService.deleteLocation(id);
    }

}
