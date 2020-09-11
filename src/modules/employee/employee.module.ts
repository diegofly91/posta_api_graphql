import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import RepoEmployee from './employee.repository';
import { Employee } from './employee.entity';
import { EmployeeResolvers } from './employee.resolver';
import { EmployeeService } from './employee.service';

import RepoCompany from '../company/company.repository';
import { Company } from '../company/company.entity';
import { CompanyService } from '../company/company.service';

import RepoTimeEmployee from '../timeemployee/timeemployee.repository';
import { TimeEmployee } from '../timeemployee/timeemployee.entity';
import { TimeEmployeeService } from '../timeemployee/timeemployee.service';

import RepoTimetable from '../timetable/timetable.repository';
import { Timetable } from '../timetable/timetable.entity';
import { TimetableService} from '../timetable/timetable.service';

import RepoDay from '../day/day.repository';
import { Day } from '../day/day.entity';
import { DayService } from '../day/day.service';

@Module({
    imports: [TypeOrmModule.forFeature([Employee, Company, TimeEmployee, Timetable, Day ])],
    providers: [
                 RepoEmployee,EmployeeService,EmployeeResolvers,
                 RepoCompany,CompanyService,
                 RepoTimeEmployee,TimeEmployeeService,
                 RepoTimetable, TimetableService,
                 RepoDay, DayService
               ],
    exports:   [
                 RepoEmployee, EmployeeService,
                 RepoCompany, 
                 RepoTimeEmployee,
                 RepoTimetable,
                 RepoDay
               ],
})
export class EmployeeModule {}
