import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import RepoDiscount from './discount.repository';
import { DiscountService } from './discount.service';
import { Discount } from './discount.entity';
import { DiscountResolvers } from './discount.resolver';

import RepoCompany from '../company/company.repository';
import { Company } from '../company/company.entity';
import { CompanyService } from '../company/company.service';

@Module({
    imports: [TypeOrmModule.forFeature([Discount, Company ])],
    providers: [
                 RepoDiscount,DiscountService, DiscountResolvers,
                 RepoCompany,CompanyService,
               ],
    exports:   [
                 RepoDiscount,DiscountService, 
                 RepoCompany, 
               ],
})
export class DiscountModule {}
