import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import RepoTimeEmployee from './timeemployee.repository';
import { TimeEmployee } from './entities/timeemployee.entity';
import { TimeEmployeeService } from './timeemployee.service';
import { TimeEmployeeResolvers } from './timeemployee.resolver';

import RepoTimetable from '../timetable/timetable.repository';
import { Timetable } from '../timetable/entities/timetable.entity';
import { TimetableService } from '../timetable/timetable.service';

import RepoEmployee from '../employee/employee.repository';
import { Employee } from '../employee/entities/employee.entity';
import { EmployeeService } from '../employee/employee.service';

import RepoCompany from '../company/company.repository';
import { Company } from '../company/entities/company.entity';
import { CompanyService } from '../company/company.service';

import { Day } from '../day/entities/day.entity';
import { DayService } from '../day/day.service';
import RepoDay from '../day/day.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Employee,
            TimeEmployee,
            Timetable,
            Company,
            Day,
        ]),
    ],
    providers: [
        RepoTimeEmployee,
        TimeEmployeeService,
        TimeEmployeeResolvers,
        RepoTimetable,
        TimetableService,
        RepoEmployee,
        EmployeeService,
        RepoDay,
        DayService,
        RepoCompany,
        CompanyService,
    ],
    exports: [
        RepoTimeEmployee,
        TimeEmployeeService,
        RepoTimetable,
        RepoEmployee,
        RepoCompany,
        RepoDay,
    ],
})
export class TimeEmployeeModule {}
