import { NotFoundException, BadRequestException } from '@nestjs/common';
import { EntityRepository, Repository, Between, Not } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { NewTimetableInput, TimetableInput, TimetableInputQuery } from '../dtos/timetable.Input';
import { Timetable } from '../entities/timetable.entity';

@EntityRepository()
class RepoTimetable {
  public constructor(
    @InjectRepository(Timetable) public readonly _timetableRepository: Repository<Timetable>
  ) {}

  async getTimetableId(id: number): Promise<Timetable> {
        return await this._timetableRepository.findOne({id});
    }

     async getTimetable(input: TimetableInputQuery): Promise<Timetable[]> {
        return await this._timetableRepository.find({where : input , order:{dayId: "ASC",startTime: "ASC"}});
    }

    async createTimetable(input: NewTimetableInput): Promise<boolean> {
        const {companyId, dayId, startTime, endTime } = input;
        const exists =  await this._timetableRepository.find({
                          where:[{dayId, companyId,startTime: Between(startTime, endTime)},
                                 {dayId, companyId,endTime: Between(startTime, endTime)}
                                ]});
        if(exists.length){
            throw new BadRequestException('exists hours');
        }
        const savedTimetable: Timetable = await this._timetableRepository.save(input);
        if(savedTimetable){
            return true;
        }
        return false;
    }

    async updateTimetable(id: number, input: TimetableInput): Promise<boolean> {
        const {dayId, startTime, endTime } = input;
        const exist =  await this._timetableRepository.find({
                       where:[{dayId,id: Not(id),startTime: Between(startTime, endTime),},
                              {dayId,id: Not(id),endTime: Between(startTime, endTime)}
                             ]});
        if(exist.length){
            throw new BadRequestException('exist hours');
        }
        const saved = await this._timetableRepository.update({id},input);
        if(saved){
            return true;
        }
        return false;
    }

    async deleteTimetable(id: number): Promise<boolean> {
        const dele = await this._timetableRepository.delete({id});
        if (dele) {
            return true;
        } else {
            throw new NotFoundException();
        }
    }

}

export default RepoTimetable;
