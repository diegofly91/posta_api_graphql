import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { LessThanOrEqual, MoreThanOrEqual } from "typeorm";

import { TimeEmployee } from './timeemployee.entity';
import RepoTimeEmployee  from './timeemployee.repository';
import { NewTimeEmployeeInput, TimeEmployeeInput, TimeEmployeeInputQuery } from './timeemployeeDto/timeemployee.Input';

@Injectable()
export class TimeEmployeeService {
    constructor(private readonly repo: RepoTimeEmployee) {}

    async getTimeEmployee(input: TimeEmployeeInputQuery): Promise<TimeEmployee[]> {
        return await this.repo.getTimeEmployee(input);
    }

    async createTimeEmployee(input: NewTimeEmployeeInput): Promise<boolean> {
        const { hini, hend } = input;
        if(hini >= hend){
            throw new BadRequestException('start time mator to end time');
        }
        return await this.repo.createTimeEmployee(input);
    }

    async updateTimeEmployee(id: number,input: TimeEmployeeInput): Promise<boolean> {
        const { hini, hend } = input;
        if(hini >= hend){
            throw new BadRequestException('start time mator to end time');
        } 
        return await this.repo.updateTimeEmployee(id,input);
    }

    async deleteTimeEmployee(id: number): Promise<boolean> {
        return await this.repo.deleteTimeEmployee(id);
    }

}
