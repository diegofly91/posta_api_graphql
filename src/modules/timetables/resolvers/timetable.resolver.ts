import {
    Args,
    Mutation,
    Query,
    Resolver,
    ResolveField,
    Parent,
    Subscription,
} from '@nestjs/graphql';
import { TimetableService } from '../services/timetable.service';
import { Timetable } from '../entities/timetable.entity';
import {
    TimetableInput,
    NewTimetableInput,
    TimetableInputQuery,
} from '../dtos/timetable.Input';
import { UsePipes, ValidationPipe } from '@nestjs/common';
import { CompanyService } from '../../companies/services/company.service';
import { Company } from '../../companies/entities/companies.entity';
import { DayService } from '../services/day.service';
import { Day } from '../entities/day.entity';

@Resolver(() => Timetable)
export class TimetableResolvers {
    constructor(
        private readonly _timetableService: TimetableService,
        private readonly _companyService: CompanyService,
        private readonly _dayService: DayService,
    ) {}

    @Query(() => Timetable, { nullable: true })
    public async getTimetableId(@Args('id') id: number): Promise<Timetable> {
        return this._timetableService.getTimetableId(id);
    }

    @Query(() => Timetable, { nullable: true })
    public async getTimetable(
        @Args('input') input: TimetableInputQuery,
    ): Promise<Timetable[]> {
        return this._timetableService.getTimetable(input);
    }

    @UsePipes(new ValidationPipe())
    @Mutation(() => Timetable, { nullable: true })
    public async createTimetable(
        @Args('input') input: NewTimetableInput,
    ): Promise<boolean> {
        return await this._timetableService.createTimetable(input);
    }

    @UsePipes(new ValidationPipe())
    @Mutation(() => Timetable, { nullable: true })
    public async updateTimetable(
        @Args('id') id: number,
        @Args('input') input: TimetableInput,
    ): Promise<boolean> {
        return await this._timetableService.updateTimetable(id, input);
    }

    @Mutation(() => Timetable, { nullable: true })
    public async deleteTimetable(@Args('id') id: number): Promise<boolean> {
        return await this._timetableService.deleteTimetable(id);
    }

    @ResolveField('company', returns => Company)
    async company(@Parent() timetable) {
        const { companyId } = timetable;
        return await this._companyService.getCompany(companyId);
    }

    @ResolveField('day', returns => Day)
    async day(@Parent() timetable) {
        const { dayId } = timetable;
        return await this._dayService.getDay(dayId);
    }
}
