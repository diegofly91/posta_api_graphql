import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { EmployeeResolvers } from './employee.resolver';
import { EmployeeService } from './employee.service';
import RepoEmployee from './employee.repository';

import { Company } from '../company/company.entity';
import { CompanyService } from '../company/company.service';
import RepoCompany from '../company/company.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Employee, Company ])],
    providers: [RepoEmployee,RepoCompany, CompanyService, EmployeeResolvers, EmployeeService ],
    exports: [RepoEmployee,RepoCompany, EmployeeService],
})
export class EmployeeModule {}
