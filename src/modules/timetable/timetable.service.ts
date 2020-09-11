import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Timetable } from './timetable.entity';
import { NewTimetableInput, TimetableInput, TimetableInputQuery } from './timetableDto/timetable.Input';
import { Between, Not } from "typeorm";

import RepoTimetable  from './timetable.repository';

@Injectable()
export class TimetableService {
    constructor(private readonly repos: RepoTimetable) {}


    async getTimetableId(id: number): Promise<Timetable> {
        return await this.repos._timetableRepository.findOne({id});
    }

     async getTimetable(input: TimetableInputQuery): Promise<Timetable[]> {
        return await this.repos._timetableRepository.find({where : input , order:{dayId: "ASC",hini: "ASC"}});
    }

    async createTimetable(input: NewTimetableInput): Promise<boolean> {
        const {companyId, dayId, hini, hend } = input;
        if(hini >= hend){
            throw new BadRequestException('start time mator to end time');
        }
        const exists =  await this.repos._timetableRepository.find({
                          where:[{dayId, companyId,hini: Between(hini, hend)},
                                 {dayId, companyId,hend: Between(hini, hend)}
                                ]});
        if(exists.length){
            throw new BadRequestException('exists hours');
        }
        const savedTimetable: Timetable = await this.repos._timetableRepository.save(input);
        if(savedTimetable){
            return true;
        }
        return false;
    }

    async updateTimetable(id: number, input: TimetableInput): Promise<boolean> {
        const {dayId, hini, hend } = input;

        const exist =  await this.repos._timetableRepository.find({
                       where:[{dayId,id: Not(id),hini: Between(hini, hend),},
                              {dayId,id: Not(id),hend: Between(hini, hend)}
                             ]});
        if(exist.length){
            throw new BadRequestException('exist hours');
        }
        const saved = await this.repos._timetableRepository.update({id},input);
        if(saved){
            return true;
        }
        return false;
    }

    async deleteTimetable(id: number): Promise<boolean> {
        const dele = await this.repos._timetableRepository.delete({id});
        if (dele) {
            return true;
        } else {
            throw new NotFoundException();
        }
    }

}
