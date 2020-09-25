import {
    Injectable,
    NotFoundException,
    BadRequestException,
} from '@nestjs/common';
import { TimeService } from './entities/timeservice.entity';
import {
    NewTimeServiceInput,
    TimeServiceInput,
    TimeServiceInputQuery,
} from './dtos/timeservice.Input';
import { LessThanOrEqual, MoreThanOrEqual } from 'typeorm';

import RepoTimeService from './timeservice.repository';

@Injectable()
export class TimeServiceService {
    constructor(private readonly repos: RepoTimeService) {}

    async getTimeService(input: TimeServiceInputQuery): Promise<TimeService[]> {
        return await this.repos._timeserviceRepository.find({
            where: input,
            order: { hini: 'ASC' },
        });
    }

    async createTimeService(input: NewTimeServiceInput): Promise<boolean> {
        const { timetableId, serviceId, hini, hend, status } = input;
        if (hini >= hend) {
            throw new BadRequestException('start time mator to end time');
        }
        const exists = await this.repos._timetableRepository.find({
            where: [
                {
                    id: timetableId,
                    hini: LessThanOrEqual(hini),
                    hend: MoreThanOrEqual(hend),
                },
            ],
        });
        if (exists.length == 0) {
            throw new BadRequestException('time range exceeded');
        }
        const timeser = await this.repos._timeserviceRepository.find({
            where: [
                {
                    timetableId,
                    serviceId,
                },
            ],
        });
        if (timeser.length > 0) {
            throw new BadRequestException('exist timeservice');
        }
        const savedTimetable: TimeService = await this.repos._timeserviceRepository.save(
            input,
        );
        if (savedTimetable) {
            return true;
        }
        return false;
    }

    async updateTimeService(
        id: number,
        input: TimeServiceInput,
    ): Promise<boolean> {
        const { hini, hend, status } = input;
        if (hini >= hend) {
            throw new BadRequestException('start time mator to end time');
        }
        const data: TimeService = await this.repos._timeserviceRepository.findOne(
            { id },
        );
        const { timetableId } = data;
        const exists = await this.repos._timetableRepository.find({
            where: [
                {
                    id: timetableId,
                    hini: LessThanOrEqual(hini),
                    hend: MoreThanOrEqual(hend),
                },
            ],
        });
        if (exists.length == 0) {
            throw new BadRequestException('time range exceeded');
        }
        const saved = await this.repos._timeserviceRepository.update(
            { id },
            input,
        );
        if (saved) {
            return true;
        }
        return false;
    }
    async deleteTimeService(id: number): Promise<boolean> {
        const dele = await this.repos._timeserviceRepository.delete({ id });
        if (dele) {
            return true;
        } else {
            throw new NotFoundException();
        }
    }
}
