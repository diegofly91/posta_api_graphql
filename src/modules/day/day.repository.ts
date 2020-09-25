import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Day } from './entities/day.entity';
import { Timetable } from '../timetable/entities/timetable.entity';

@Injectable()
class RepoDay {
    public constructor(
        @InjectRepository(Day) public readonly _dayRepository: Repository<Day>,
        @InjectRepository(Timetable)
        public readonly _timetableRepository: Repository<Timetable>,
    ) {}
}

export default RepoDay;
