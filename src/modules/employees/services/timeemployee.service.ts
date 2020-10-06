import { Injectable } from '@nestjs/common';

import { TimeEmployee } from '../entities/timeemployee.entity';
import RepoTimeEmployee from '../repositories/timeemployee.repository';
import {
    NewTimeEmployeeInput,
    TimeEmployeeInput,
    TimeEmployeeInputQuery,
} from '../dtos/timeemployee.Input';

@Injectable()
export class TimeEmployeeService {
    constructor(private readonly repo: RepoTimeEmployee) {}

    async getTimeEmployee(input: TimeEmployeeInputQuery): Promise<TimeEmployee[]> {
        return await this.repo.getTimeEmployee(input);
    }

    async createTimeEmployee(input: NewTimeEmployeeInput): Promise<boolean> {
        return await this.repo.createTimeEmployee(input);
    }

    async updateTimeEmployee(id: number,input: TimeEmployeeInput): Promise<boolean> {
        return await this.repo.updateTimeEmployee(id,input);
    }

    async deleteTimeEmployee(id: number): Promise<boolean> {
        return await this.repo.deleteTimeEmployee(id);
    }
}
