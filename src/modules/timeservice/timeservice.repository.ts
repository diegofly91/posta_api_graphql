import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { TimeService } from './timeservice.entity';
import { Timetable } from '../timetable/timetable.entity';
import { Service } from '../service/service.entity';


@Injectable()
class RepoTimeService {
  public constructor(
    @InjectRepository(TimeService) public readonly _timeserviceRepository: Repository<TimeService>,
    @InjectRepository(Timetable) public readonly _timetableRepository: Repository<Timetable>,
    @InjectRepository(Service) public readonly _serviceRepository: Repository<Service>
  ) {}
}

export default RepoTimeService;
