import {  NotFoundException, BadRequestException } from '@nestjs/common';
import { Repository, EntityRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { ServEmpl } from './servempl.entity';
import { ServEmplQueryInput, NewServEmplInput} from './servemplDto/servempl.Input';

@EntityRepository()
class RepoServEmpl {
  public constructor(
    @InjectRepository(ServEmpl) public readonly _servemplRepository: Repository<ServEmpl>
  ) {}
    async getServEmpl(input: ServEmplQueryInput): Promise<ServEmpl[]> {
        return await this._servemplRepository.find({where : input});
    }

    async createServEmpl(input: NewServEmplInput): Promise<boolean> {
        const exists =  await this._servemplRepository.find(input);
        if(exists.length > 0){
            throw new BadRequestException('exist relation');
        }
        const savedServEmpl: ServEmpl = await this._servemplRepository.save(input);
        if(savedServEmpl){
            return true;
        }
        return false;
    }

    async deleteServEmpl(id: number): Promise<boolean> {
        const dele = await this._servemplRepository.delete({id});
        if (dele) {
            return true;
        } else {
            throw new NotFoundException();
        }
    }

}

export default RepoServEmpl;
