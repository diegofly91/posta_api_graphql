import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import RepoTimetable from './timetable.repository';
import { Timetable } from './timetable.entity';
import { TimetableResolvers } from './timetable.resolver';
import { TimetableService } from './timetable.service';

import RepoCompany from '../company/company.repository';
import { Company } from '../company/company.entity';
import { CompanyService } from '../company/company.service';

import { Day } from '../day/day.entity';
import { DayService } from '../day/day.service';
import RepoDay from '../day/day.repository';

import { TimeService } from '../timeservice/timeservice.entity';
import { TimeServiceService } from '../timeservice/timeservice.service';
import RepoTimeService from '../timeservice/timeservice.repository';

import RepoService from '../service/service.repository';
import { Service } from '../service/service.entity';
import { ServiceService } from '../service/service.service';

@Module({
    imports: [  TypeOrmModule.forFeature([Timetable, Company, Day, Service, TimeService ])],
    providers: [
                RepoTimeService,
                RepoDay,
                RepoCompany,
                RepoTimetable,
                RepoService, 
                CompanyService,
                ServiceService,
                TimeServiceService, 
                DayService, 
                TimetableResolvers, 
                TimetableService 
               ],
    exports:   [
                RepoTimeService,
                RepoDay,
                RepoCompany,
                RepoService,
                RepoTimetable, 
                TimetableService
               ],
})
export class TimetableModule {}
