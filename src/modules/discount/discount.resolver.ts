import { Args, Mutation, Query, Resolver,ResolveField, Parent, Subscription } from '@nestjs/graphql';
import { UsePipes, ValidationPipe } from '@nestjs/common';
import { DiscountService } from './discount.service';
import { Discount } from './discount.entity';
import { DiscountInput, NewDiscountInput, DiscountInputQuery } from './discountDto/discount.Input';
import { PaginationArgs } from '../../shared/graphql/variousDto/various.Input';

@Resolver(() => Discount)
export class DiscountResolvers {
    constructor(private readonly _discountService: DiscountService
    ) {}

    @Query(() => Discount, { nullable: true })
    public async getDiscount(@Args('id') id: number): Promise<Discount> {
        return this._discountService.getDiscount(id);
    }

    @Query(() => [Discount])
    public async getDiscounts(@Args('input') input: DiscountInputQuery, 
                             @Args('pagination') pagination?: PaginationArgs,
    ): Promise<Discount[]> {
        return this._discountService.getDiscounts(input,pagination);
    }
    
    @Query(() => Number)
    public async countDiscounts( @Args('input') input: DiscountInputQuery): Promise<number> {
        return this._discountService.countDiscounts(input);
    }

    @UsePipes(new ValidationPipe())
    @Mutation(() => Discount, { nullable: true })
    public async createDiscountCompany( @Args('input') input: NewDiscountInput): Promise<Discount> {
        return await this._discountService.createDiscountCompany(input);
    }

    @UsePipes(new ValidationPipe())
    @Mutation(() => Discount)
    public async updateDiscountCompany( @Args('id') id: number,  @Args('input') input: DiscountInput): Promise<boolean> {
        return await this._discountService.updateDiscountCompany(id, input);
    }

    @Mutation(() => Discount)
    public async deleteDiscountCompany(@Args('id') id: number): Promise<boolean> {
        return await this._discountService.deleteDiscountCompany(id);
    }

}
