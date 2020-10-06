import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import RepoService from './repositories/service.repository';
import { ServiceService } from './services/service.service';
import { ServiceResolvers } from './resolvers/service.resolver';
import { Service } from './entities';

import RepoCompany from '../companies/repositories/company.repository';
import { Company } from '../companies/entities/companies.entity';
import { CompanyService } from '../companies/services/company.service';

import RepoTimeService from './repositories/timeservice.repository';
import { TimeService } from './entities/timeservice.entity';
import { TimeServiceService } from './services/timeservice.service';
import { TimeServiceResolvers } from './resolvers/timeservice.resolver';


import RepoTimetable from '../timetables/repositories/timetable.repository';
import { Timetable } from '../timetables/entities/timetable.entity';
import { TimetableService } from '../timetables/services/timetable.service';

import RepoDay from '../timetables/repositories/day.repository';
import { Day } from '../timetables/entities/day.entity';
import { DayService } from '../timetables/services/day.service';

import { ServEmpl } from './entities/servempl.entity';
import { ServEmplService } from './services/servempl.service';
import { ServEmplResolvers } from './resolvers/servempl.resolver';
import RepoServEmpl from './repositories/servempl.repository';

import RepoEmployee from '../employees/repositories/employee.repository';
import { Employee } from '../employees/entities/employee.entity';
import { EmployeeService } from '../employees/services/employee.service';

@Module({
    imports:   [TypeOrmModule.forFeature([Service, Company, TimeService, Timetable, Day, ServEmpl, Employee ])],
    providers: [
                    RepoService, ServiceService,ServiceResolvers,
                    RepoServEmpl, ServEmplService, ServEmplResolvers,
                    RepoTimeService,TimeServiceService,TimeServiceResolvers,
                    RepoEmployee, EmployeeService,
                    RepoDay,DayService,
                    RepoCompany, CompanyService,
                    RepoTimetable, TimetableService,
                ],
    exports:   [
                    RepoService,ServiceService,
                    RepoServEmpl, ServEmplService,
                    RepoTimeService, 
                    RepoDay,
                    RepoEmployee,
                    RepoCompany,
                    RepoTimetable,
               ],
})
export class ServiceModule {}
