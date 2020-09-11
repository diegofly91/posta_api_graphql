import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './company.entity';

@Injectable()
class RepoCompany {
  public constructor(
    @InjectRepository(Company) public readonly _companyRepository: Repository<Company>,
  ) {}
}

export default RepoCompany;
