import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { TimeEmployee } from './timeemployee.entity';
import { Timetable } from '../timetable/timetable.entity';
import { Employee } from '../employee/employee.entity';


@Injectable()
class RepoTimeEmployee {
  public constructor(
    @InjectRepository(TimeEmployee) public readonly _timeemployeeRepository: Repository<TimeEmployee>,
    @InjectRepository(Timetable) public readonly _timetableRepository: Repository<Timetable>,
    @InjectRepository(Employee) public readonly _employeeRepository: Repository<Employee>
  ) {}
}

export default RepoTimeEmployee;
