import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './product.service';
import { ProductResolvers } from './product.resolver';
import { Product } from './product.entity';
import { Company } from '../company/company.entity';
import { CompanyService } from '../company/company.service';

@Module({
    imports: [TypeOrmModule.forFeature([Product, Company ])],
    providers: [ProductService, ProductResolvers, CompanyService],
    exports: [ProductService],
})
export class ProductModule {}
