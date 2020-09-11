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

import { Day } from '../day/day.entity';
import { DayService } from '../day/day.service';
import RepoDay from '../day/day.repository';

@Module({
    imports:   [TypeOrmModule.forFeature([Service, Company, TimeService, Timetable, Day ])],
    providers: [
                    RepoTimeService,
                    RepoDay,
                    RepoService,
                    RepoCompany,
                    RepoTimetable,
                    ServiceService,
                    DayService,
                    TimetableService,
                    TimeServiceService, 
                    ServiceResolvers, 
                    CompanyService
                ],
    exports:   [
                    RepoTimeService, 
                    RepoService,
                    RepoDay,
                    RepoCompany,
                    RepoTimetable,
                    ServiceService
               ],
})
export class ServiceModule {}
