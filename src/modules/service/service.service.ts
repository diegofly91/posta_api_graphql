import { Injectable, NotFoundException } from '@nestjs/common';
import { Service } from './entities';
import { NewServiceInput, ServiceInput, ServiceInputQuery } from './dtos';
import { PaginationArgs } from '../../shared/graphql/variousDto/various.Input';

import RepoService from './service.repository';

@Injectable()
export class ServiceService {
    constructor(private readonly repos: RepoService) {}

    async getService(id: number): Promise<Service> {
        return await this.repos._serviceRepository.findOne({ id });
    }

    async getServices(
        input?: ServiceInputQuery,
        pagination?: PaginationArgs,
    ): Promise<Service[]> {
        let inputData = input ? input : {};

        if (pagination) {
            const { limit, offset } = pagination;
            return await this.repos._serviceRepository.find({
                where: inputData,
                take: limit,
                skip: offset,
            });
        } else {
            return await this.repos._serviceRepository.find({
                where: inputData,
            });
        }
    }

    async countServices(input?: ServiceInputQuery): Promise<number> {
        if (input) {
            return await this.repos._serviceRepository.count({ where: input });
        } else {
            return await this.repos._serviceRepository.count();
        }
    }

    async createService(input: NewServiceInput): Promise<Service> {
        const savedCompany: Service = await this.repos._serviceRepository.save(
            input,
        );
        return savedCompany;
    }

    async updateService(id: number, input: ServiceInput): Promise<boolean> {
        const service = await this.repos._serviceRepository.update(
            { id },
            input,
        );
        if (service.affected) {
            return true;
        } else {
            throw new NotFoundException();
        }
    }

    async deleteService(id: number): Promise<boolean> {
        const dele = await this.repos._serviceRepository.delete({ id });
        if (dele.affected) {
            return true;
        } else {
            throw new NotFoundException();
        }
    }
}
