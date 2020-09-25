import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Employee } from './entities/employee.entity';
import { Company } from '../company/entities/company.entity';

@Injectable()
class RepoEmployee {
    public constructor(
        @InjectRepository(Employee)
        public readonly _employeeRepository: Repository<Employee>,
        @InjectRepository(Company)
        public readonly _companyRepository: Repository<Company>,
    ) {}
}

export default RepoEmployee;
