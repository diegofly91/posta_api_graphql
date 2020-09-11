import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Day } from './day.entity';
import { DayResolvers } from './day.resolver';
import { DayService } from './day.service';
import RepoDay from './day.repository';

import RepoTamitable from '../timetable/timetable.repository';
import { Timetable } from '../timetable/timetable.entity';
import { TimetableService } from '../timetable/timetable.service';

import RepoCompany from '../company/company.repository';
import { Company } from '../company/company.entity';
import { CompanyService } from '../company/company.service';

@Module({
    imports:   [TypeOrmModule.forFeature([Day, Company, Timetable ])],
    providers: [
                 RepoDay, DayService, DayResolvers,    
                 RepoCompany, CompanyService, 
                 RepoTamitable,TimetableService,
               ],
    exports:   [
                 RepoDay, 
                 RepoCompany,  
                 DayService
               ],
})
export class DayModule {}
