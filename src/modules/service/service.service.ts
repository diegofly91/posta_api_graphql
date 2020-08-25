import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './service.entity';
import { ServiceInput, NewServiceInput, ServiceInputQuery } from './serviceDto/service.Input';
import { PaginationArgs } from '../../shared/graphql/variousDto/various.Input';

@Injectable()
export class ServiceService {
    constructor(
        @InjectRepository(Service)
        private _serviceRepository: Repository<Service>,
    ) {}

    async getService(id: number): Promise<Service> {
        return await this._serviceRepository.findOne(id);
    }

    async getServices(input?:ServiceInputQuery,
                      pagination?: PaginationArgs
                      ): Promise<Service[]> {  
       let inputData = input? input : {};
                                    
       if (pagination) {
            const { limit, offset } = pagination;
            return await this._serviceRepository.find({
                where: inputData,
                take: limit,
                skip: offset,
            });
        } else return await this._serviceRepository.find({where: inputData});
    }

    async countServices(input?:ServiceInputQuery): Promise<number> {
        if(input)
          return await this._serviceRepository.count({ where: input });
        else  
          return await this._serviceRepository.count();
    }

    async createService(input: NewServiceInput): Promise<Service> {
        const savedCompany: Service = await this._serviceRepository.save(input);
        return savedCompany;
    }

    async updateService(id: number, input: ServiceInput): Promise<boolean> {
        const service = await this._serviceRepository.update(id, input);
        if (service) return true;
        else throw new NotFoundException();
    }

    async deleteService(id: number): Promise<boolean> {
        const dele = await this._serviceRepository.delete(id);
        if (dele) return true;
        else throw new NotFoundException();
    }
}
