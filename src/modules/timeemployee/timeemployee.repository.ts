import { NotFoundException, BadRequestException } from '@nestjs/common';
import { EntityRepository,Repository, LessThanOrEqual, MoreThanOrEqual } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { TimeEmployee } from './timeemployee.entity';
import { Timetable } from '../timetable/timetable.entity';
import { Employee } from '../employee/employee.entity';
import { NewTimeEmployeeInput, TimeEmployeeInput, TimeEmployeeInputQuery } from './timeemployeeDto/timeemployee.Input';


@EntityRepository()
class RepoTimeEmployee {
  public constructor(
    @InjectRepository(TimeEmployee) public readonly _timeemployeeRepository: Repository<TimeEmployee>,
    @InjectRepository(Timetable) public readonly _timetableRepository: Repository<Timetable>,
    @InjectRepository(Employee) public readonly _employeeRepository: Repository<Employee>
  ) {}

   async getTimeEmployee(input: TimeEmployeeInputQuery): Promise<TimeEmployee[]> {
        return await this._timeemployeeRepository.find({where : input , order:{hini: "ASC"}});
    }

    async createTimeEmployee(input: NewTimeEmployeeInput): Promise<boolean> {
        const {timetableId, employeeId, hini, hend } = input;
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
        const timeser = await this._timeemployeeRepository.find({where:[{
                                                                            timetableId,
                                                                            employeeId
                                                                    }]});
        if(timeser.length > 0){
            throw new BadRequestException('exist timeemployee');
        }                                                                   
        const savedTimetable: TimeEmployee = await this._timeemployeeRepository.save(input);
        if(savedTimetable){
            return true;
        }
        return false;
    }

    async updateTimeEmployee(id: number,input: TimeEmployeeInput): Promise<boolean> {
        const { hini, hend } = input;
        const data : TimeEmployee = await this._timeemployeeRepository.findOne({id});
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
        const saved = await this._timeemployeeRepository.update({id},input);
        if(saved){
            return true;
        }
        return false;
    }

    async deleteTimeEmployee(id: number): Promise<boolean> {
        const dele = await this._timeemployeeRepository.delete({id});
        if (dele) {
            return true;
        } else {
            throw new NotFoundException();
        }
    }
}

export default RepoTimeEmployee;
