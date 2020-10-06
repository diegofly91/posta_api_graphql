import { Injectable } from '@nestjs/common';
import RepoEmployee  from '../repositories/employee.repository';
import { Employee } from '../entities/employee.entity';
import { NewEmployeeInput, EmployeeInput, EmployeeInputQuery } from '../dtos/employee.Input';
import { PaginationArgs } from '../../../shared/graphql/variousDto/various.Input';

@Injectable()
export class EmployeeService {
    constructor(private readonly repo: RepoEmployee) {
    }

    async getEmployee(id: number): Promise<Employee> {
        return await this.repo.getEmployee(id);
    }

    async getEmployees(input: EmployeeInputQuery, pagination?: PaginationArgs): Promise<Employee[]> {
        return await this.repo.getEmployees(input, pagination);
    }

    async countEmployees(input: EmployeeInputQuery): Promise<number> {
        return await this.repo.countEmployees(input);
    }

    async createEmployee(input: NewEmployeeInput): Promise<Employee> {
        return await this.repo.createEmployee(input);
    }

    async updateEmployee(id: number, input: EmployeeInput): Promise<boolean> {
        return await this.repo.updateEmployee(id,input);
    }

    async deleteEmployee(id: number): Promise<boolean> {
        return await this.repo.deleteEmployee(id);
    }
}
