import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Timetable } from './timetable.entity';
import { Company } from '../company/company.entity';
import { Day } from '../day/day.entity';


@Injectable()
class RepoTimetable {
  public constructor(
    @InjectRepository(Timetable) public readonly _timetableRepository: Repository<Timetable>,
    @InjectRepository(Company) public readonly _companyRepository: Repository<Company>,
    @InjectRepository(Day) public readonly _dayRepository: Repository<Day>
  ) {}
}

export default RepoTimetable;
