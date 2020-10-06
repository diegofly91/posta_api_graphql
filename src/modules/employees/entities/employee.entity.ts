import { Field, ObjectType, Int } from '@nestjs/graphql';
import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    JoinColumn,
} from 'typeorm';
import { Company } from '../../companies/entities/companies.entity';
import { TimeEmployee } from './timeemployee.entity';
import { ServEmpl } from '../../services/entities/servempl.entity';

@ObjectType()
@Entity({ name: 'employees' })
export class Employee extends BaseEntity {
    @Field(type => Int, { description: `ID of the employee` })
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Field({ description: `ID  company` })
    @Column({ name: 'companies_id' })
    companyId: number;

    @ManyToOne(
        () => Company,
        company => company.employees,
        { primary: true },
    )
    @JoinColumn({ name: 'companies_id' })
    company: Company;

    @OneToMany(
        () => TimeEmployee,
        timeemployee => timeemployee.employees,
        { cascade: true },
    )
    timeemployees: TimeEmployee[];

    @OneToMany(() => ServEmpl, servempl => servempl.employees, { cascade: true })
    servempls: ServEmpl[];

    @Field({ description: `name employee` })
    @Column({ type: 'varchar', nullable: false, length: 30 })
    name: string;
    
    @Field({ description: `last name employee` })
    @Column({ type: 'varchar', nullable: true, length: 30 })
    lastname: string;

    @Field({ description: `name employee` })
    @Column({ type: 'varchar', nullable: true, length: 20 })
    mobile: string;

    @Field()
    @Column({ type: 'boolean', default: 1 })
    status: boolean;

    @Field()
    @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
    createAdt: Date;

    @Field()
    @UpdateDateColumn({ type: 'timestamp', name: 'update_at' })
    createUpd: Date;
}
