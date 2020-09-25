import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import RepoCompany from './company.repository';
import { CompanyService } from './company.service';
import { CompanyResolvers } from './company.resolver';
import { Company } from './entities';

import { Service } from '../service/entities';
import { ServiceService } from '../service/service.service';
import RepoService from '../service/service.repository';

import { Employee } from '../employee/entities/employee.entity';
import { EmployeeService } from '../employee/employee.service';
import RepoEmployee from '../employee/employee.repository';

import RepoTimetable from '../timetable/timetable.repository';
import { TimetableService } from '../timetable/timetable.service';
import { Timetable } from '../timetable/entities/timetable.entity';

import RepoTimeService from '../timeservice/timeservice.repository';
import { TimeServiceService } from '../timeservice/timeservice.service';
import { TimeService } from '../timeservice/entities/timeservice.entity';

import RepoTimeEmployee from '../timeemployee/timeemployee.repository';
import { TimeEmployeeService } from '../timeemployee/timeemployee.service';
import { TimeEmployee } from '../timeemployee/entities/timeemployee.entity';

import { Day } from '../day/entities/day.entity';
import RepoDay from '../day/day.repository';
import { DayService } from '../day/day.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Company,
            Service,
            Employee,
            Timetable,
            Day,
            TimeService,
            TimeEmployee,
        ]),
    ],
    providers: [
        RepoCompany,
        CompanyService,
        CompanyResolvers,
        RepoDay,
        DayService,
        RepoEmployee,
        EmployeeService,
        RepoService,
        ServiceService,
        RepoTimetable,
        TimetableService,
        RepoTimeService,
        TimeServiceService,
        RepoTimeEmployee,
        TimeEmployeeService,
    ],
    exports: [
        RepoCompany,
        CompanyService,
        RepoDay,
        RepoEmployee,
        RepoService,
        RepoTimetable,
        RepoTimeService,
        RepoTimeEmployee,
    ],
})
export class CompanyModule {}
