import { Injectable, BadRequestException } from '@nestjs/common';
import { Timetable } from './timetable.entity';
import { NewTimetableInput, TimetableInput, TimetableInputQuery } from './timetableDto/timetable.Input';
import RepoTimetable  from './timetable.repository';

@Injectable()
export class TimetableService {
    constructor(private readonly repo: RepoTimetable) {}

    async getTimetableId(id: number): Promise<Timetable> {
        return await this.repo.getTimetableId(id);
    }

     async getTimetable(input: TimetableInputQuery): Promise<Timetable[]> {
        return await this.repo.getTimetable(input);
    }

    async createTimetable(input: NewTimetableInput): Promise<boolean> {
        return await this.repo.createTimetable(input);
    }

    async updateTimetable(id: number, input: TimetableInput): Promise<boolean> {
        return await this.repo.updateTimetable(id,input);
    }

    async deleteTimetable(id: number): Promise<boolean> {
        return await this.repo.deleteTimetable(id);
    }
}
