import { NotFoundException } from '@nestjs/common';
import { EntityRepository,Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Service } from './entities/service.entity';
import { NewServiceInput, ServiceInput, ServiceInputQuery } from './dtos/service.Input';
import { PaginationArgs } from '../../shared/graphql/variousDto/various.Input';

@EntityRepository()
class RepoService {
  public constructor(
    @InjectRepository(Service) public readonly _serviceRepository: Repository<Service>
  ) {}

    async getService(id: number): Promise<Service> {
        return await this._serviceRepository.findOne({id});
    }

    async getServices(input?: ServiceInputQuery, pagination?: PaginationArgs): Promise<Service[]> {
        let inputData = input ? input : {};

        if (pagination) {
            const { limit, offset } = pagination;
            return await this._serviceRepository.find({
                where: inputData,
                take: limit,
                skip: offset,
            });
        } else {
            return await this._serviceRepository.find({ where: inputData });
        }
    }

    async countServices(input?: ServiceInputQuery): Promise<number> {
        if (input) {
            return await this._serviceRepository.count({ where: input });
        } else {
            return await this._serviceRepository.count();
        }
    }

    async createService(input: NewServiceInput): Promise<Service> {
        const savedCompany: Service = await this._serviceRepository.save(input);
        return savedCompany;
    }

    async updateService(id: number, input: ServiceInput): Promise<boolean> {
        const service  = await this._serviceRepository.update({id}, input);
        if (service.affected) {
            return true;
        } else {
            throw new NotFoundException();
        }
    }

    async deleteService(id: number): Promise<boolean> {
        const dele = await this._serviceRepository.delete({id});
        if (dele.affected) {
            return true;
        } else {
            throw new NotFoundException();
        }
    }

}

export default RepoService;
