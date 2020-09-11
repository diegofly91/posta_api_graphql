import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Day } from './day.entity';
import { Not} from 'typeorm';

import RepoDay  from './day.repository';

@Injectable()
export class DayService {
    constructor(private readonly repos: RepoDay) {
    }

    async getDay(id: number): Promise<Day> {
        return await this.repos._dayRepository.findOne({id});
    }

    async getDays(): Promise<Day[]> {
        return await this.repos._dayRepository.find();
    }

    async createDay(name: string): Promise<boolean> {
        const day = await this.repos._dayRepository.findOne({  where: { name: name.toLowerCase().trim() },});
        if (day){
            throw new BadRequestException('the day already exists');
        } 
        const savedDay: Day = await this.repos._dayRepository.save({name});
        if(savedDay){
            return true;
        }else{  throw new NotFoundException();}
    }

    async updateDay(id: number, name: string): Promise<boolean> {
        const day = await this.repos._dayRepository.findOne({  where: { name: name.toLowerCase().trim(), id: Not(id) }});
        if (day){
            throw new BadRequestException('the day already exists');
        }
        const savedDay = await this.repos._dayRepository.update(id, {name});
        if (savedDay) {
            return true;
        } else {
            throw new NotFoundException();
        }
    }

}
