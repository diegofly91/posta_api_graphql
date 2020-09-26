import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import RepoTimeService from './timeservice.repository';
import { TimeService } from './entities/timeservice.entity';
import { TimeServiceService } from './timeservice.service';
import { TimeServiceResolvers } from './timeservice.resolver';

import RepoTimetable from '../timetable/timetable.repository';
import { Timetable } from '../timetable/entities/timetable.entity';
import { TimetableService } from '../timetable/timetable.service';

import RepoService from '../service/service.repository';
import { Service } from '../service/entities/service.entity';
import { ServiceService } from '../service/service.service';

import RepoCompany from '../company/company.repository';
import { Company } from '../company/entities/company.entity';
import { CompanyService } from '../company/company.service';

import { Day } from '../day/entities/day.entity';
import { DayService } from '../day/day.service';
import RepoDay from '../day/day.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Service,
            TimeService,
            Timetable,
            Company,
            Day,
        ]),
    ],
    providers: [
        RepoTimeService,
        TimeServiceService,
        TimeServiceResolvers,
        RepoTimetable,
        TimetableService,
        RepoService,
        ServiceService,
        RepoDay,
        DayService,
        RepoCompany,
        CompanyService,
    ],
    exports: [
        RepoTimeService,
        TimeServiceService,
        RepoTimetable,
        RepoService,
        RepoCompany,
        RepoDay,
    ],
})
export class TimeServiceModule {}
