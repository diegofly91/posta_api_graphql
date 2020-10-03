import { NotFoundException } from '@nestjs/common';
import { EntityRepository,Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { NewDiscountInput, DiscountInput, DiscountInputQuery } from './dtos/discount.Input';
import { PaginationArgs } from '../../shared/graphql/variousDto/various.Input';
import { Discount } from './entities/discount.entity';

@EntityRepository()
class RepoDiscount {
  public constructor(
    @InjectRepository(Discount) public readonly _discountRepository: Repository<Discount>
  ) {}

    async getDiscount(id: number): Promise<Discount> {
        return await this._discountRepository.findOne({id});
    }

    async getDiscounts(input: DiscountInputQuery, pagination ?: PaginationArgs): Promise<Discount[]>{
            if (pagination) {
                const { limit, offset } = pagination;
                return await this._discountRepository.find({
                    where: input,
                    take: limit,
                    skip: offset,
                    order: {
                        createAdt: "DESC"
                    }
                });
            } else {
                return await this._discountRepository.find({where:input, order: { createAdt: 'DESC'}});
            }
    }

    async countDiscounts(input: DiscountInputQuery): Promise<number> {
        return await this._discountRepository.count(input);
    }

    async createDiscountCompany (input: NewDiscountInput): Promise<Discount> {
        const savedDiscount: Discount = await this._discountRepository.save(input);
        return savedDiscount;
    }

    async updateDiscountCompany (id: number,input: DiscountInput): Promise<boolean> {
        const discount = await this._discountRepository.update({id}, input);
        if (!discount.affected) {
            throw new NotFoundException();
        } 
        return true;
    }
    async deleteDiscountCompany(id: number): Promise<boolean> {
        const dele = await this._discountRepository.delete({id});
        if (!dele.affected) {
            throw new NotFoundException();
        } 
        return true;
    }

}

export default RepoDiscount;
