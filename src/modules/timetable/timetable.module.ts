import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import RepoTimetable from './timetable.repository';
import { Timetable } from './entities/timetable.entity';
import { TimetableResolvers } from './timetable.resolver';
import { TimetableService } from './timetable.service';

import RepoCompany from '../company/company.repository';
import { Company } from '../company/entities/company.entity';
import { CompanyService } from '../company/company.service';

import { Day } from '../day/entities/day.entity';
import { DayService } from '../day/day.service';
import RepoDay from '../day/day.repository';

import { TimeService } from '../timeservice/entities/timeservice.entity';
import { TimeServiceService } from '../timeservice/timeservice.service';
import RepoTimeService from '../timeservice/timeservice.repository';

import RepoService from '../service/service.repository';
import { Service } from '../service/entities/service.entity';
import { ServiceService } from '../service/service.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Timetable,
            Company,
            Day,
            Service,
            TimeService,
        ]),
    ],
    providers: [
        RepoTimeService,
        TimeServiceService,
        TimetableResolvers,
        RepoDay,
        DayService,
        RepoCompany,
        CompanyService,
        RepoTimetable,
        TimetableService,
        RepoService,
        ServiceService,
    ],
    exports: [
        RepoTimeService,
        TimetableService,
        RepoDay,
        RepoCompany,
        RepoService,
        RepoTimetable,
    ],
})
export class TimetableModule {}
