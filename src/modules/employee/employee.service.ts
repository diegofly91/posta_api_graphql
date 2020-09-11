import { Injectable, NotFoundException } from '@nestjs/common';
import { Employee } from './employee.entity';
import { NewEmployeeInput, EmployeeInput, EmployeeInputQuery } from './employeeDto/employee.Input';
import { PaginationArgs } from '../../shared/graphql/variousDto/various.Input';

import RepoEmployee  from './employee.repository';

@Injectable()
export class EmployeeService {
    constructor(private readonly repos: RepoEmployee) {
    }

    async getEmployee(id: number): Promise<Employee> {
        return await this.repos._employeeRepository.findOne({id});
    }

    async getEmployees(input?: EmployeeInputQuery, pagination?: PaginationArgs): Promise<Employee[]> {
        let inputData = input ? input : {};

        if (pagination) {
            const { limit, offset } = pagination;
            return await this.repos._employeeRepository.find({
                where: inputData,
                take: limit,
                skip: offset,
            });
        } else {
            return await this.repos._employeeRepository.find({ where: inputData });
        }
    }

    async countEmployees(input?: EmployeeInputQuery): Promise<number> {
        if (input) {
            return await this.repos._employeeRepository.count({ where: input });
        } else {
            return await this.repos._employeeRepository.count();
        }
    }

    async createEmployee(input: NewEmployeeInput): Promise<Employee> {
        const savedEmployee: Employee = await this.repos._employeeRepository.save(input);
        return savedEmployee;
    }

    async updateEmployee(id: number, input: EmployeeInput): Promise<boolean> {
        const employee = await this.repos._employeeRepository.update({id}, input);
        if (employee.affected) {
            return true;
        } else {
            throw new NotFoundException();
        }
    }

    async deleteEmployee(id: number): Promise<boolean> {
        const dele = await this.repos._employeeRepository.delete({id});
        if (dele.affected) {
            return true;
        } else {
            throw new NotFoundException();
        }
    }
}
