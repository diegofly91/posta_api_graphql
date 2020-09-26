import {  NotFoundException, BadRequestException } from '@nestjs/common';
import { EntityRepository,Repository, Not } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Day } from './entities/day.entity';

@EntityRepository()
class RepoDay {
  public constructor(
         @InjectRepository(Day) public readonly _dayRepository: Repository<Day>
  ) {}
    async getDay(id: number): Promise<Day> {
        return await this._dayRepository.findOne({id});
    }

    async getDays(): Promise<Day[]> {
        return await this._dayRepository.find();
    }

    async createDay(name: string): Promise<boolean> {
        const day = await this._dayRepository.findOne({  where: { name: name.toLowerCase().trim() },});
        if (day){
            throw new BadRequestException('the day already exists');
        } 
        const savedDay: Day = await this._dayRepository.save({name});
        if(savedDay){
            return true;
        }else{  throw new NotFoundException();}
    }

    async updateDay(id: number, name: string): Promise<boolean> {
        const day = await this._dayRepository.findOne({  where: { name: name.toLowerCase().trim(), id: Not(id) }});
        if (day){
            throw new BadRequestException('the day already exists');
        }
        const savedDay = await this._dayRepository.update(id, {name});
        if (savedDay) {
            return true;
        } else {
            throw new NotFoundException();
        }
    }
}

export default RepoDay;
