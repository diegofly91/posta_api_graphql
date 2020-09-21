import { Injectable } from '@nestjs/common';
import { Day } from './day.entity';

import RepoDay  from './day.repository';

@Injectable()
export class DayService {
    constructor(private readonly repos: RepoDay) {}

    async getDay(id: number): Promise<Day> {
        return await this.repos.getDay(id);
    }

    async getDays(): Promise<Day[]> {
        return await this.repos.getDays();
    }

    async createDay(name: string): Promise<boolean> {
        return await this.repos.createDay(name);
    }

    async updateDay(id: number, name: string): Promise<boolean> {
        return await this.repos.updateDay(id,name);
    }

}
