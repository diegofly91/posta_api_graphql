import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import RepoEmployee from './employee.repository';
import { Employee } from './entities/employee.entity';
import { EmployeeResolvers } from './employee.resolver';
import { EmployeeService } from './employee.service';

import RepoCompany from '../company/company.repository';
import { Company } from '../company/entities/company.entity';
import { CompanyService } from '../company/company.service';

import RepoTimeEmployee from '../timeemployee/timeemployee.repository';
import { TimeEmployee } from '../timeemployee/entities/timeemployee.entity';
import { TimeEmployeeService } from '../timeemployee/timeemployee.service';

import RepoTimetable from '../timetable/timetable.repository';
import { Timetable } from '../timetable/entities/timetable.entity';
import { TimetableService } from '../timetable/timetable.service';

import RepoDay from '../day/day.repository';
import { Day } from '../day/entities/day.entity';
import { DayService } from '../day/day.service';

import { ServEmpl } from '../servempl/entities/servempl.entity';
import { ServEmplService } from '../servempl/servempl.service';
import RepoServEmpl from '../servempl/servempl.repository';
@Module({
    imports: [TypeOrmModule.forFeature([Employee, Company, TimeEmployee, Timetable, Day, ServEmpl ])],
    providers: [
                 RepoEmployee,EmployeeService,EmployeeResolvers,
                 RepoCompany,CompanyService,
                 RepoTimeEmployee,TimeEmployeeService,
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
