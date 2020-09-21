import { NotFoundException } from '@nestjs/common';
import { EntityRepository,Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NewEmployeeInput, EmployeeInput, EmployeeInputQuery } from './employeeDto/employee.Input';
import { PaginationArgs } from '../../shared/graphql/variousDto/various.Input';

import { Employee } from './employee.entity';


@EntityRepository()
class RepoEmployee {
  public constructor(
    @InjectRepository(Employee) public readonly _employeeRepository: Repository<Employee>
  ) {}

  async getEmployee(id: number): Promise<Employee> {
    return await this._employeeRepository.findOne({id});
}

async getEmployees(input?: EmployeeInputQuery, pagination?: PaginationArgs): Promise<Employee[]> {
    let inputData = input ? input : {};

    if (pagination) {
        const { limit, offset } = pagination;
        return await this._employeeRepository.find({
            where: inputData,
            take: limit,
            skip: offset,
        });
    } else {
        return await this._employeeRepository.find({ where: inputData });
    }
}

async countEmployees(input?: EmployeeInputQuery): Promise<number> {
    if (input) {
        return await this._employeeRepository.count({ where: input });
    } else {
        return await this._employeeRepository.count();
    }
}

async createEmployee(input: NewEmployeeInput): Promise<Employee> {
    const savedEmployee: Employee = await this._employeeRepository.save(input);
    return savedEmployee;
}

async updateEmployee(id: number, input: EmployeeInput): Promise<boolean> {
    const employee = await this._employeeRepository.update({id}, input);
    if (employee.affected) {
        return true;
    } else {
        throw new NotFoundException();
    }
}

async deleteEmployee(id: number): Promise<boolean> {
    const dele = await this._employeeRepository.delete({id});
    if (dele.affected) {
        return true;
    } else {
        throw new NotFoundException();
    }
}
}

export default RepoEmployee;
