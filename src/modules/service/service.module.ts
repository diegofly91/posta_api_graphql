import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import   RepoService from './service.repository'
import { ServiceService } from './service.service';
import { ServiceResolvers } from './service.resolver';
import { Service } from './service.entity';

import RepoCompany from '../company/company.repository';
import { Company } from '../company/company.entity';
import { CompanyService } from '../company/company.service';

import RepoTimeService from '../timeservice/timeservice.repository';
import { TimeService } from '../timeservice/timeservice.entity';
import { TimeServiceService } from '../timeservice/timeservice.service';

import RepoTimetable from '../timetable/timetable.repository';
import { Timetable } from '../timetable/timetable.entity';
import { TimetableService} from '../timetable/timetable.service';

import RepoDay from '../day/day.repository';
import { Day } from '../day/day.entity';
import { DayService } from '../day/day.service';

import { ServEmpl } from '../servempl/servempl.entity';
import { ServEmplService } from '../servempl/servempl.service';
import RepoServEmpl from '../servempl/servempl.repository';

@Module({
    imports:   [TypeOrmModule.forFeature([Service, Company, TimeService, Timetable, Day, ServEmpl ])],
    providers: [
                    RepoService, ServiceService,ServiceResolvers,
                    RepoTimeService,TimeServiceService,
                    RepoDay,DayService,
                    RepoCompany, CompanyService,
                    RepoTimetable, TimetableService,
                    RepoServEmpl, ServEmplService
                ],
    exports:   [
                    RepoService,ServiceService,
                    RepoTimeService, 
                    RepoDay,
                    RepoCompany,
                    RepoTimetable,
                    RepoServEmpl
               ],
})
export class ServiceModule {}
