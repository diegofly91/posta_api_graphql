import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceService } from './service.service';
import { ServiceResolvers } from './service.resolver';
import { Service } from './service.entity';
import { Company } from '../company/company.entity';
import { CompanyService } from '../company/company.service';

@Module({
    imports: [TypeOrmModule.forFeature([Service, Company ])],
    providers: [ServiceService, ServiceResolvers, CompanyService],
    exports: [ServiceService],
})
export class ServiceModule {}
