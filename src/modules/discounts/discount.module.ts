import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import RepoDiscount from './repositories/discount.repository';
import { DiscountService } from './services/discount.service';
import { Discount } from './entities/discount.entity';
import { DiscountResolvers } from './resolvers/discount.resolver';

import RepoCompany from '../companies/repositories/company.repository';
import { Company } from '../companies/entities/companies.entity';
import { CompanyService } from '../companies/services/company.service';

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
