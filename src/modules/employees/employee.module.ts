import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import RepoEmployee from './repositories/employee.repository';
import { Employee } from './entities/employee.entity';
import { EmployeeResolvers } from './resolvers/employee.resolver';
import { EmployeeService } from './services/employee.service';

import RepoCompany from '../companies/repositories/company.repository';
import { Company } from '../companies/entities/companies.entity';
import { CompanyService } from '../companies/services/company.service';

import RepoTimeEmployee from './repositories/timeemployee.repository';
import { TimeEmployee } from './entities/timeemployee.entity';
import { TimeEmployeeService } from './services/timeemployee.service';
import { TimeEmployeeResolvers } from './resolvers/timeemployee.resolver';

import RepoTimetable from '../timetables/repositories/timetable.repository';
import { Timetable } from '../timetables/entities/timetable.entity';
import { TimetableService } from '../timetables/services/timetable.service';

import RepoDay from '../timetables/repositories/day.repository';
import { Day } from '../timetables/entities/day.entity';
import { DayService } from '../timetables/services/day.service';

import { ServEmpl } from '../services/entities/servempl.entity';
import { ServEmplService } from '../services/services/servempl.service';
import RepoServEmpl from '../services/repositories/servempl.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Employee, Company, TimeEmployee, Timetable, Day, ServEmpl ])],
    providers: [
                 RepoEmployee,EmployeeService,EmployeeResolvers,
                 RepoCompany,CompanyService,
                 RepoTimeEmployee,TimeEmployeeService,TimeEmployeeResolvers,
                 RepoTimetable, TimetableService,
                 RepoDay, DayService,
                 RepoServEmpl, ServEmplService
               ],
    exports:   [
                 RepoEmployee, EmployeeService,
                 RepoCompany, 
                 RepoTimeEmployee,
                 RepoTimetable,
                 RepoDay,
                 RepoServEmpl
               ],
})
export class EmployeeModule {}
