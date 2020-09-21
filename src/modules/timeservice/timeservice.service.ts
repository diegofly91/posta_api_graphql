import { Injectable, BadRequestException } from '@nestjs/common';
import { TimeService } from './timeservice.entity';
import { NewTimeServiceInput, TimeServiceInput, TimeServiceInputQuery } from './timeserviceDto/timeservice.Input';

import RepoTimeService  from './timeservice.repository';

@Injectable()
export class TimeServiceService {
    constructor(private readonly repo: RepoTimeService) {}

    async getTimeService(input: TimeServiceInputQuery): Promise<TimeService[]> {
        return await this.repo.getTimeService(input);
    }

    async createTimeService(input: NewTimeServiceInput): Promise<boolean> {
        const { hini, hend}  = input;
        if(hini >= hend){
            throw new BadRequestException('start time mator to end time');
        }
        return await this.repo.createTimeService(input);
    }

    async updateTimeService(id: number,input: TimeServiceInput): Promise<boolean> {
        const { hini, hend } = input;
        if(hini >= hend){
            throw new BadRequestException('start time mator to end time');
        } 
        return await this.repo.updateTimeService(id,input);
    }

    async deleteTimeService(id: number): Promise<boolean> {
        return await this.repo.deleteTimeService(id);
    }
}
