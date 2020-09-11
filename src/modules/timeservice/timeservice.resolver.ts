import { Args, Mutation, Query, Resolver,ResolveField, Parent, Subscription } from '@nestjs/graphql';
import { UsePipes, ValidationPipe } from '@nestjs/common';

import { TimeService } from './timeservice.entity';
import { TimeServiceService } from './timeservice.service';
import { TimeServiceInput, NewTimeServiceInput, TimeServiceInputQuery } from './timeserviceDto/timeservice.Input';

import { TimetableService } from '../timetable/timetable.service';
import { Timetable } from '../timetable/timetable.entity';

@Resolver(() => TimeService)
export class TimeServiceResolvers {
    constructor(private readonly _timeService: TimeServiceService,
                private readonly _tamitableService: TimetableService,) {}

    @Query(() => TimeService, { nullable: true })
    public async getTimeService(@Args('input') input: TimeServiceInputQuery): Promise<TimeService[]> {
        return this._timeService.getTimeService(input);
    }

    @UsePipes(new ValidationPipe())
    @Mutation(() => TimeService, { nullable: true })
    public async createTimeService( @Args('input') input: NewTimeServiceInput): Promise<boolean> {
        return await this._timeService.createTimeService(input);
    }

    @UsePipes(new ValidationPipe())
    @Mutation(() => TimeService, { nullable: true })
    public async updateTimeService( @Args('id') id: number, @Args('input') input: TimeServiceInput): Promise<boolean> {
        return await this._timeService.updateTimeService(id,input);
    }
    
    @Mutation(() => TimeService, { nullable: true })
    public async deleteTimeService( @Args('id') id: number): Promise<boolean> {
        return await this._timeService.deleteTimeService(id);
    }

    @ResolveField('timetable', returns => Timetable)
    async company(@Parent() timeservice) {
        const { timetableId } = timeservice;
        return await this._tamitableService.getTimetableId(timetableId);
    }
        
    
}
