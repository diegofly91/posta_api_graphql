import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Timetable } from './timetable.entity';
import { TimetableResolvers } from './timetable.resolver';
import { TimetableService } from './timetable.service';
import RepoTimetable from './timetable.repository';
import { Company } from '../company/company.entity';
import { CompanyService } from '../company/company.service';
import { Day } from '../day/day.entity';
import { DayService } from '../day/day.service';
import RepoDay from '../day/day.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Timetable, Company, Day ])],
    providers: [RepoDay,RepoTimetable, CompanyService, DayService, TimetableResolvers, TimetableService ],
    exports: [RepoDay,RepoTimetable, TimetableService],
})
export class TimetableModule {}
