import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Service } from './service.entity';
import { Company } from '../company/company.entity';

@Injectable()
class RepoService {
  public constructor(
    @InjectRepository(Service) public readonly _serviceRepository: Repository<Service>,
    @InjectRepository(Company) public readonly _companyRepository: Repository<Company>,
  ) {}
}

export default RepoService;
