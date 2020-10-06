import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import RepoTimetable from './repositories/timetable.repository';
import { Timetable } from './entities/timetable.entity';
import { TimetableResolvers } from './resolvers/timetable.resolver';
import { TimetableService } from './services/timetable.service';

import RepoCompany from '../companies/repositories/company.repository';
import { Company } from '../companies/entities/companies.entity';
import { CompanyService } from '../companies/services/company.service';

import { Day } from './entities/day.entity';
import { DayService } from './services/day.service';
import { DayResolvers } from './resolvers/day.resolver';
import RepoDay from './repositories/day.repository';

import { TimeService } from '../services/entities/timeservice.entity';
import { TimeServiceService } from '../services/services/timeservice.service';
import RepoTimeService from '../services/repositories/timeservice.repository';

import RepoService from '../services/repositories/service.repository';
import { Service } from '../services/entities/service.entity';
import { ServiceService } from '../services/services/service.service';

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
        DayResolvers,
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
