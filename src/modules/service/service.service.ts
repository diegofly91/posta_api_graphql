import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './service.entity';
import { ServiceInput } from './serviceDto/service.Input';
// import { PaginationArgs } from '../../shared/graphql/variousDto/various.Input';

@Injectable()
export class ServiceService {
    constructor(
        @InjectRepository(Service)
        private _serviceRepository: Repository<Service>,
    ) {}

    async getService(id: number): Promise<Service> {
        return await this._serviceRepository.findOne(id);
    }

    // async getCompanys(pagination?: PaginationArgs): Promise<Service[]> {
    async getServices(): Promise<Service[]> {
        // if (pagination) {
        //     const { limit, offset } = pagination;
        //     return await this._serviceRepository.find({
        //         take: limit,
        //         skip: offset,
        //     });
        // } else return await this._serviceRepository.find();
        return await this._serviceRepository.find();
    }

    async countServices(status?: boolean): Promise<number> {
        if (status != null)
            return await this._serviceRepository.count({ where: { status } });
        else return await this._serviceRepository.count();
    }

    async createService(input: ServiceInput): Promise<Service> {
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
