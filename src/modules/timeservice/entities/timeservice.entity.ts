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
import { Timetable } from '../../timetable/entities/timetable.entity';
import { Service } from '../../service/entities/service.entity';

@ObjectType()
@Entity({ name: 'timeservices' })
export class TimeService extends BaseEntity {
    @Field(type => Int, { description: `ID of the hours timeservice` })
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Field({ description: `timetable id` })
    @Column({ name: 'timetables_id' })
    timetableId: number;

    @ManyToOne(
        () => Timetable,
        timetable => timetable.timeservices,
        { nullable: false, cascade: true, onDelete: 'CASCADE' },
    )
    @JoinColumn({ name: 'timetables_id', referencedColumnName: 'id' })
    timetables: Timetable;

    @Field({ description: `service id` })
    @Column({ name: 'services_id' })
    serviceId: number;

    @ManyToOne(
        () => Service,
        service => service.timeservices,
        { nullable: false, onDelete: 'CASCADE' },
    )
    @JoinColumn({ name: 'services_id', referencedColumnName: 'id' })
    services: Service;

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
