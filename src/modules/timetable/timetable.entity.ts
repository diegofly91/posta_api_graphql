import { Field, ObjectType, Int } from '@nestjs/graphql';
import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryColumn,
    JoinColumn
} from 'typeorm';
import { Day } from '../day/day.entity';
import { Company } from '../company/company.entity';

@ObjectType()
@Entity({ name: 'timetables' })
export class Timetable extends BaseEntity {
    @Field(type => Int, { description: `ID of the employee` })
    @PrimaryGeneratedColumn('increment')
    id: number;

    @PrimaryColumn({name: 'companys_id'})
    companyId: number;

    @ManyToOne(() => Company, company => company.timetables, {primary:true})
    @JoinColumn({name: 'companys_id'})
    company: Company;

    @PrimaryColumn({name: 'days_id'})
    dayId: number;

    @ManyToOne(() => Day, day => day.timetables, {primary:true})
    @JoinColumn({name: 'days_id'})
    day: Day;

    @Field({ description: `hour start` })
    @Column({ type: 'time', nullable: false })
    hini: Date;

    @Field({ description: `hour end` })
    @Column({ type: 'time', nullable: false })
    hend: Date;

    @Field()
    @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
    createAdt: Date;

    @Field()
    @UpdateDateColumn({ type: 'timestamp', name: 'update_at' })
    createUpd: Date;
}
