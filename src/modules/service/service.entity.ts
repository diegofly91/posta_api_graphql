import { Field, ObjectType, Int } from '@nestjs/graphql';
import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Company } from '../company/company.entity';

@ObjectType()
@Entity({ name: 'services' })
export class Service extends BaseEntity {
    @Field(type => Int, { description: `ID of the service` })
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ManyToOne(type => Company, company => company.services, { nullable: false })
    company: Company;

    @Field({ description: `name service` })
    @Column({ type: 'varchar', nullable: false, length: 50 })
    name: string;

    @Field({ description: `service description` })
    @Column({ type: 'varchar', nullable: true, length: 150 })
    description: string;

    @Field({ description: `phone company` })
    @Column({ type: 'int', nullable: true })
    duration: number;

    @Field({ description: `price service` })
    @Column({ type: 'float', nullable: true })
    price: number;

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
