import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn
} from 'typeorm';
import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Operation } from './operation.entity'

@ObjectType()
@Entity({ name: 'modules' })
export class Module {
    
    @Field(type => Int, { description: `ID of the mudule` })
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Field()
    @Column({ type: 'varchar', nullable: false, length: 60 })
    name: String;

    @Field()
    @CreateDateColumn({ type: 'timestamp', nullable: true, name: 'created_at' })
    createdAt: Date;

    @OneToMany(
        () => Operation,
        operation => operation.module
    )
    operation: Operation[];

}