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
    OneToMany,
    JoinColumn,
} from 'typeorm';
import { Day } from '../../day/entities/day.entity';
import { Company } from '../../company/entities/company.entity';
import { TimeService } from '../../timeservice/entities/timeservice.entity';
import { TimeEmployee } from '../../timeemployee/entities/timeemployee.entity';

@ObjectType()
@Entity({ name: 'timetables' })
export class Timetable extends BaseEntity {
    @Field(type => Int, { description: `ID hours table ` })
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Field({ description: `ID company` })
    @Column({ name: 'companies_id' })
    companyId: number;

    @ManyToOne(
        () => Company,
        company => company.timetables,
        { primary: true },
    )
    @JoinColumn({ name: 'companies_id' })
    company: Company;

    @Field({ description: `ID day` })
    @Column({ name: 'days_id' })
    dayId: number;

    @ManyToOne(
        () => Day,
        day => day.timetables,
        { eager: true },
    )
    @JoinColumn({ name: 'days_id' })
    day: Day;

    @OneToMany(
        type => TimeService,
        timeservice => timeservice.timetables,
        { eager: true },
    )
    timeservices: TimeService[];

    @OneToMany(
        type => TimeEmployee,
        timeemployee => timeemployee.timetables,
        { eager: true },
    )
    timeemployees: TimeService[];

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
