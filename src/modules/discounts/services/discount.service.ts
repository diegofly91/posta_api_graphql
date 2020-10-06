import { Injectable } from '@nestjs/common';
import RepoDiscount  from '../repositories/discount.repository';
import { Discount } from '../entities/discount.entity';
import { NewDiscountInput, DiscountInput, DiscountInputQuery } from '../dtos/discount.Input';
import { PaginationArgs } from '../../../shared/graphql/variousDto/various.Input';

@Injectable()
export class DiscountService {
    constructor(private readonly repo: RepoDiscount) {
    }

    async getDiscount(id: number): Promise<Discount> {
        return await this.repo.getDiscount(id);
    }

    async getDiscounts(input: DiscountInputQuery, pagination?: PaginationArgs): Promise<Discount[]> {
        return await this.repo.getDiscounts(input, pagination);
    }

    async countDiscounts(input: DiscountInputQuery): Promise<number> {
        return await this.repo.countDiscounts(input);
    }

    async createDiscountCompany(input: NewDiscountInput): Promise<Discount> {
        return await this.repo.createDiscountCompany(input);
    }

    async updateDiscountCompany(id: number, input: DiscountInput): Promise<boolean> {
        return await this.repo.updateDiscountCompany(id,input);
    }

    async deleteDiscountCompany(id: number): Promise<boolean> {
        return await this.repo.deleteDiscountCompany(id);
    }
}
