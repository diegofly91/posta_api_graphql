import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import RepoServEmpl from './servempl.repository';
import { ServEmpl } from './servempl.entity';
import { ServEmplService } from './servempl.service';
import { ServEmplResolvers } from './servempl.resolver';

import RepoService from '../service/service.repository';
import { Service } from '../service/service.entity';
import { ServiceService } from '../service/service.service';

import RepoEmployee from '../employee/employee.repository';
import { Employee } from '../employee/employee.entity';
import { EmployeeService } from '../employee/employee.service';

import RepoCompany from '../company/company.repository';
import { Company } from '../company/company.entity';
import { CompanyService } from '../company/company.service'

@Module({
    imports:   [TypeOrmModule.forFeature([ ServEmpl, Service, Employee, Company ])],
    providers: [
                 RepoServEmpl,ServEmplService,ServEmplResolvers,
                 RepoService,ServiceService,
                 RepoEmployee,EmployeeService,
                 RepoCompany, CompanyService
               ],
    exports:   [
                 RepoServEmpl,ServEmplService,
                 RepoService,
                 RepoEmployee, 
                 RepoCompany
               ],
})
export class ServEmplModule {}

