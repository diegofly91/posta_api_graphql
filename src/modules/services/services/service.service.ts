import { Injectable } from '@nestjs/common';
import { Service } from '../entities/service.entity';
import { NewServiceInput, ServiceInput, ServiceInputQuery } from '../dtos/service.Input';
import { PaginationArgs } from '../../../shared/graphql/variousDto/various.Input';
import RepoService  from '../repositories/service.repository';

@Injectable()
export class ServiceService {
    constructor(private readonly repo: RepoService) {}

    async getService(id: number): Promise<Service> {
        return await this.repo.getService(id);
    }

    async getServices(input?: ServiceInputQuery, pagination?: PaginationArgs): Promise<Service[]> {
        return await this.repo.getServices(input,pagination);
     }

    async countServices(input?: ServiceInputQuery): Promise<number> {
        return await this.repo.countServices(input);
    }

    async createService(input: NewServiceInput): Promise<Service> {
        return await this.repo.createService(input);
    }

    async updateService(id: number, input: ServiceInput): Promise<boolean> {
        return await this.repo.updateService(id,input);
    }

    async deleteService(id: number): Promise<boolean> {
        return await this.repo.deleteService(id);
    }
}
