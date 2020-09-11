import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import RepoTimeService  from './timeservice.repository';
import { TimeService } from './timeservice.entity';
import { TimeServiceService } from './timeservice.service';
import { TimeServiceResolvers } from './timeservice.resolver';

import RepoTimetable from '../timetable/timetable.repository';
import { Timetable } from '../timetable/timetable.entity';
import { TimetableService} from '../timetable/timetable.service';

import RepoService from '../service/service.repository';
import { Service } from '../service/service.entity';
import { ServiceService } from '../service/service.service';

import RepoCompany from '../company/company.repository';
import { Company } from '../company/company.entity';
import { CompanyService } from '../company/company.service';

import { Day } from '../day/day.entity';
import { DayService } from '../day/day.service';
import RepoDay from '../day/day.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Service, TimeService, Timetable, Company, Day ])],
    providers: [
                    RepoTimeService, 
                    RepoTimetable,
                    RepoService,
                    RepoDay,
                    DayService,
                    RepoCompany,
                    TimeServiceService,
                    ServiceService, 
                    TimetableService,
                    CompanyService,
                    TimeServiceResolvers,
               ],
    exports:   [
                    RepoTimeService,
                    RepoTimetable, 
                    RepoService,
                    RepoCompany, 
                    RepoDay,
                    TimeServiceService, 
               ],
})
export class TimeServiceModule {}
