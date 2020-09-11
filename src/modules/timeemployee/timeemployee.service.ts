import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { LessThanOrEqual, MoreThanOrEqual } from "typeorm";

import { TimeEmployee } from './timeemployee.entity';
import RepoTimeEmployee  from './timeemployee.repository';
import { NewTimeEmployeeInput, TimeEmployeeInput, TimeEmployeeInputQuery } from './timeemployeeDto/timeemployee.Input';

@Injectable()
export class TimeEmployeeService {

    constructor(private readonly repos: RepoTimeEmployee) {}

    async getTimeEmployee(input: TimeEmployeeInputQuery): Promise<TimeEmployee[]> {
        return await this.repos._timeemployeeRepository.find({where : input , order:{hini: "ASC"}});
    }

    async createTimeEmployee(input: NewTimeEmployeeInput): Promise<boolean> {
        const {timetableId, employeeId, hini, hend, status } = input;
        if(hini >= hend){
            throw new BadRequestException('start time mator to end time');
        }
        const exists =  await this.repos._timetableRepository.find({
                          where:[{
                                     id:timetableId,
                                     hini: LessThanOrEqual(hini), 
                                     hend: MoreThanOrEqual(hend)
                                }]
        });
        if(exists.length == 0){
            throw new BadRequestException('time range exceeded');
        }
        const timeser = await this.repos._timeemployeeRepository.find({where:[{
                                                                            timetableId,
                                                                            employeeId
                                                                    }]});
        if(timeser.length > 0){
            throw new BadRequestException('exist timeemployee');
        }                                                                   
        const savedTimetable: TimeEmployee = await this.repos._timeemployeeRepository.save(input);
        if(savedTimetable){
            return true;
        }
        return false;
    }

    async updateTimeEmployee(id: number,input: TimeEmployeeInput): Promise<boolean> {
        const { hini, hend, status } = input;
        if(hini >= hend){
            throw new BadRequestException('start time mator to end time');
        } 
        const data : TimeEmployee = await this.repos._timeemployeeRepository.findOne({id});
        const {timetableId} = data;
        const exists =  await this.repos._timetableRepository.find({
                                    where:[{
                                            id:timetableId,
                                            hini: LessThanOrEqual(hini), 
                                            hend: MoreThanOrEqual(hend)
                                        }]
                        });
        if(exists.length == 0){
        throw new BadRequestException('time range exceeded');
        }
        const saved = await this.repos._timeemployeeRepository.update({id},input);
        if(saved){
            return true;
        }
        return false;
    }

    async deleteTimeEmployee(id: number): Promise<boolean> {
        const dele = await this.repos._timeemployeeRepository.delete({id});
        if (dele) {
            return true;
        } else {
            throw new NotFoundException();
        }
    }

}
