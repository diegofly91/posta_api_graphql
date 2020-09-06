import { Args, Mutation, Query, Resolver,ResolveField, Parent, Subscription } from '@nestjs/graphql';
import { DayService } from './day.service';
import { Day } from './day.entity';
// import { EmployeeInput, NewEmployeeInput,EmployeeInputQuery } from './employeeDto/day.Input';


@Resolver(() => Day)
export class DayResolvers {
    constructor(private readonly _dayService: DayService
    ) {}

    @Query(() => [Day])
    public async getDays(): Promise<Day[]> {
        return this._dayService.getDays();
    }

    @Query(() => Day, { nullable: true })
    public async getDay(@Args('id') id: number): Promise<Day> {
        return this._dayService.getDay(id);
    }

    @Mutation(() => Day, { nullable: true })
    public async createDay( @Args('name') name: string): Promise<boolean> {
        return await this._dayService.createDay(name);
    }

    @Mutation(() => Day)
    public async updateDay( @Args('id') id: number,  @Args('name') name: string): Promise<boolean> {
        return await this._dayService.updateDay(id, name);
    }

    // @ResolveField('company', returns => Company)
    // async company(@Parent() day) {
    //     const { id_company } = day;
    //     return await this._companyService.getCompany(id_company);
    // }

    // @Subscription(() => Service)
    // countService(){

    // }
}
