import { NotFoundException, BadRequestException } from '@nestjs/common';
import { EntityRepository, Repository, LessThanOrEqual, MoreThanOrEqual } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NewTimeServiceInput, TimeServiceInput, TimeServiceInputQuery } from '../dtos/timeservice.Input';

import { TimeService } from '../entities/timeservice.entity';
import { Timetable } from '../../timetables/entities/timetable.entity';
import { Service } from '../entities/service.entity';

@EntityRepository()
class RepoTimeService {
  public constructor(
    @InjectRepository(TimeService) public readonly _timeserviceRepository: Repository<TimeService>,
    @InjectRepository(Timetable) public readonly _timetableRepository: Repository<Timetable>,
    @InjectRepository(Service) public readonly _serviceRepository: Repository<Service>
  ) {}

    async getTimeService(input: TimeServiceInputQuery): Promise<TimeService[]> {
        return await this._timeserviceRepository.find({where : input , order:{hini: "ASC"}});
    }

    async createTimeService(input: NewTimeServiceInput): Promise<boolean> {
        const {timetableId, serviceId, hini, hend } = input;
        const exists =  await this._timetableRepository.find({
                        where:[{
                                    id:timetableId,
                                    hini: LessThanOrEqual(hini), 
                                    hend: MoreThanOrEqual(hend)
                                }]
        });
        if(exists.length == 0){
            throw new BadRequestException('time range exceeded');
        }
        const timeser = await this._timeserviceRepository.find({where:[{
                                                                            timetableId,
                                                                            serviceId
                                                                    }]});
        if(timeser.length > 0){
            throw new BadRequestException('exist timeservice');
        }                                                                   
        const savedTimetable: TimeService = await this._timeserviceRepository.save(input);
        if(savedTimetable){
            return true;
        }
        return false;
    }

    async updateTimeService(id: number,input: TimeServiceInput): Promise<boolean> {
        const { hini, hend } = input;
        const data :TimeService = await this._timeserviceRepository.findOne({id});
        const {timetableId} = data;
        const exists =  await this._timetableRepository.find({
                                    where:[{
                                            id:timetableId,
                                            hini: LessThanOrEqual(hini), 
                                            hend: MoreThanOrEqual(hend)
                                        }]
                        });
        if(exists.length == 0){
        throw new BadRequestException('time range exceeded');
        }
        const saved = await this._timeserviceRepository.update({id},input);
        if(saved){
            return true;
        }
        return false;

    }
    async deleteTimeService(id: number): Promise<boolean> {
        const dele = await this._timeserviceRepository.delete({id});
        if (dele) {
            return true;
        } else {
            throw new NotFoundException();
        }
    }

}

export default RepoTimeService;
