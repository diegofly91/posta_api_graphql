import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import RepoCompany  from './company.repository';
import { CompanyService } from './company.service';
import { CompanyResolvers } from './company.resolver';
import { Company } from './company.entity';

import { Service } from '../service/service.entity'
import { ServiceService } from '../service/service.service';
import RepoService from '../service/service.repository';

import { Employee } from '../employee/employee.entity';
import { EmployeeService } from '../employee/employee.service';
import RepoEmployee from '../employee/employee.repository';

import RepoTimetable from '../timetable/timetable.repository';
import { TimetableService } from '../timetable/timetable.service';
import { Timetable } from '../timetable/timetable.entity';

import RepoTimeService from '../timeservice/timeservice.repository';
import { TimeServiceService } from '../timeservice/timeservice.service';
import { TimeService } from '../timeservice/timeservice.entity';

import { Day } from '../day/day.entity';
import RepoDay from '../day/day.repository';
import { DayService} from '../day/day.service'

@Module({
    imports: [TypeOrmModule.forFeature([Company, Service, Employee,Timetable, Day, TimeService])],
    providers: [ 
                CompanyService, DayService,RepoCompany,
                EmployeeService, CompanyResolvers, 
                ServiceService,TimetableService, 
                RepoEmployee, RepoTimetable,TimeServiceService, 
                RepoDay,RepoTimeService, RepoService],
    exports: [  RepoCompany,CompanyService,
                RepoTimetable, RepoDay, 
                RepoService, RepoTimeService
            ], 
})
export class CompanyModule {}
