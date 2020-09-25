import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Timetable } from './entities/timetable.entity';
import { Company } from '../company/entities/company.entity';
import { Day } from '../day/entities/day.entity';

@Injectable()
class RepoTimetable {
    public constructor(
        @InjectRepository(Timetable)
        public readonly _timetableRepository: Repository<Timetable>,
        @InjectRepository(Company)
        public readonly _companyRepository: Repository<Company>,
        @InjectRepository(Day) public readonly _dayRepository: Repository<Day>,
    ) {}
}

export default RepoTimetable;
