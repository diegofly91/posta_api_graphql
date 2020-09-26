import { Field, ObjectType, Int } from '@nestjs/graphql';
import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Service } from '../../service/entities/service.entity';
import { Employee } from '../../employee/entities/employee.entity';
import { Timetable } from '../../timetable/entities/timetable.entity';
import { Discount } from '../../discount/entities/discount.entity';
// import { Location } from '../../location/entities/location.entities';


@ObjectType()
@Entity({ name: 'companies' })
export class Company extends BaseEntity {
    @Field(type => Int, { description: `ID of the company` })
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Field({ description: `name company` })
    @Column({ type: 'varchar', nullable: false, length: 50 })
    name: string;

    @Field({ description: `company description` })
    @Column({ type: 'varchar', nullable: true, length: 150 })
    description: string;

    @Field({ description: `company address` })
    @Column({ type: 'varchar', nullable: true, length: 100 })
    address: string;

    @Field({ description: `phone company` })
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

    @OneToMany(
        type => Service,
        service => service.company,
        { cascade: true },
    )
    services: Service[];

    @OneToMany(
        type => Employee,
        employee => employee.company,
        { cascade: true },
    )
    employees: Employee[];

    @OneToMany(
        type => Timetable,
        timetable => timetable.company,
        { cascade: true },
    )
    timetables: Timetable[];

    @OneToMany(type => Discount, discount => discount.company, { cascade: true })
    discounts: Discount[];

}
