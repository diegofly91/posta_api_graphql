import { Field, ObjectType, Int } from '@nestjs/graphql';
import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    OneToMany,
    JoinColumn
} from 'typeorm';

import { Employee } from '../employee/employee.entity';
import { Service } from '../service/service.entity';

@ObjectType()
@Entity({ name: 'servicesandemployees' })
export class ServEmpl extends BaseEntity {

    @Field(type => Int, { description: `ID of the service and employee` })
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Field({ description: `ID  service` })
    @Column({name: 'services_id'})
    serviceId: number;
    
    @ManyToOne(() => Service, service => service.servempls, {nullable: false, onDelete : "CASCADE" })
    @JoinColumn({name: 'services_id'})
    services: Service;

    @Field({ description: `ID  employee` })
    @Column({name: 'employees_id'})
    employeeId: number;
    
    @ManyToOne(() => Employee, employee => employee.servempls, {nullable: false, onDelete : "CASCADE" })
    @JoinColumn({name: 'employees_id'})
    employees: Employee;

    @Field()
    @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
    createAdt: Date;

}
