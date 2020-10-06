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
import { Timetable } from './timetable.entity';

@ObjectType()
@Entity({ name: 'days' })
export class Day extends BaseEntity {
    @Field(type => Int, { description: `ID of the day` })
    @PrimaryGeneratedColumn('increment')
    id: number;

    @OneToMany(
        type => Timetable,
        timetable => timetable.day,
        { cascade: true },
    )
    timetables: Timetable[];

    @Field({ description: `name day` })
    @Column({ type: 'varchar', nullable: false, length: 50 })
    name: string;

    @Field()
    @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
    createAdt: Date;

    @Field()
    @UpdateDateColumn({ type: 'timestamp', name: 'update_at' })
    createUpd: Date;
}
