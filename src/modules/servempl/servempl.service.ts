import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';

import { ServEmpl } from './entities/servempl.entity';
import { ServEmplQueryInput, NewServEmplInput} from './dtos/servempl.Input';
import  RepoServEmpl  from './servempl.repository';

@Injectable()
export class ServEmplService {

    constructor(private readonly repo: RepoServEmpl) {}

    async getServEmpl(input: ServEmplQueryInput): Promise<ServEmpl[]> {
        return await this.repo.getServEmpl(input);
    }

    async createServEmpl(input: NewServEmplInput): Promise<boolean> {
        return await this.repo.createServEmpl(input);
    }

    async deleteServEmpl(id: number): Promise<boolean> {
        return await this.repo.deleteServEmpl(id);
    }

}
