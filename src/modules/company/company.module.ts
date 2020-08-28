import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyService } from './company.service';
import { CompanyResolvers } from './company.resolver';
import { Company } from './company.entity';
import { Service } from '../service/service.entity'
import { ServiceService } from '../service/service.service';
import { Product } from '../product/product.entity'
import { ProductService } from '../product/product.service';

@Module({
    imports: [TypeOrmModule.forFeature([Company, Service, Product])],
    providers: [CompanyService, CompanyResolvers, ServiceService, ProductService],
    exports: [CompanyService],
})
export class CompanyModule {}
