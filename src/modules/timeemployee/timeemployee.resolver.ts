import {
    Args,
    Mutation,
    Query,
    Resolver,
    ResolveField,
    Parent,
    Subscription,
} from '@nestjs/graphql';
import { UsePipes, ValidationPipe } from '@nestjs/common';

import { TimeEmployee } from './entities/timeemployee.entity';
import { TimeEmployeeService } from './timeemployee.service';
import {
    TimeEmployeeInput,
    NewTimeEmployeeInput,
    TimeEmployeeInputQuery,
} from './dtos/timeemployee.Input';

import { TimetableService } from '../timetable/timetable.service';
import { Timetable } from '../timetable/entities/timetable.entity';

@Resolver(() => TimeEmployee)
export class TimeEmployeeResolvers {
    constructor(
        private readonly _timeEmployee: TimeEmployeeService,
        private readonly _tamitableService: TimetableService,
    ) {}

    @Query(() => TimeEmployee, { nullable: true })
    public async getTimeEmployee(
        @Args('input') input: TimeEmployeeInputQuery,
    ): Promise<TimeEmployee[]> {
        return this._timeEmployee.getTimeEmployee(input);
    }

    @UsePipes(new ValidationPipe())
    @Mutation(() => TimeEmployee, { nullable: true })
    public async createTimeEmployee(
        @Args('input') input: NewTimeEmployeeInput,
    ): Promise<boolean> {
        return await this._timeEmployee.createTimeEmployee(input);
    }

    @UsePipes(new ValidationPipe())
    @Mutation(() => TimeEmployee, { nullable: true })
    public async updateTimeEmployee(
        @Args('id') id: number,
        @Args('input') input: TimeEmployeeInput,
    ): Promise<boolean> {
        return await this._timeEmployee.updateTimeEmployee(id, input);
    }

    @Mutation(() => TimeEmployee, { nullable: true })
    public async deleteTimeEmployee(@Args('id') id: number): Promise<boolean> {
        return await this._timeEmployee.deleteTimeEmployee(id);
    }

    @ResolveField('timetable', returns => Timetable)
    async company(@Parent() timeemployee) {
        const { timetableId } = timeemployee;
        return await this._tamitableService.getTimetableId(timetableId);
    }
}
