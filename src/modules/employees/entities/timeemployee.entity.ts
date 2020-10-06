import { Field, ObjectType, Int } from '@nestjs/graphql';
import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
} from 'typeorm';
import { Timetable } from '../../timetables/entities/timetable.entity';
import { Employee } from './employee.entity';

@ObjectType()
@Entity({ name: 'timeemployees' })
export class TimeEmployee extends BaseEntity {
    @Field(type => Int, { description: `ID of the hours timeemployee` })
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Field({ description: `timetable id` })
    @Column({ name: 'timetables_id' })
    timetableId: number;

    @ManyToOne(
        () => Timetable,
        timetable => timetable.timeemployees,
        { nullable: false, cascade: true, onDelete: 'CASCADE' },
    )
    @JoinColumn({ name: 'timetables_id', referencedColumnName: 'id' })
    timetables: Timetable;

    @Field({ description: `employee id` })
    @Column({ name: 'employees_id' })
    employeeId: number;

    @ManyToOne(
        () => Employee,
        employee => employee.timeemployees,
        { nullable: false, onDelete: 'CASCADE' },
    )
    @JoinColumn({ name: 'employees_id', referencedColumnName: 'id' })
    employees: Employee;

    @Field({ description: `hour start` })
    @Column({ type: 'time', nullable: false })
    hini: Date;

    @Field({ description: `hour end` })
    @Column({ type: 'time', nullable: false })
    hend: Date;

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
