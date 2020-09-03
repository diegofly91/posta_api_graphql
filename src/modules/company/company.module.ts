import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyService } from './company.service';
import { CompanyResolvers } from './company.resolver';
import { Company } from './company.entity';
import { Service } from '../service/service.entity'
import { ServiceService } from '../service/service.service';
import { Employee } from '../employee/employee.entity';
import { EmployeeService } from '../employee/employee.service';
import RepoEmployee from '../employee/employee.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Company, Service, Employee])],
    providers: [CompanyService, EmployeeService, CompanyResolvers, ServiceService, RepoEmployee],
    exports: [CompanyService],
})
export class CompanyModule {}
