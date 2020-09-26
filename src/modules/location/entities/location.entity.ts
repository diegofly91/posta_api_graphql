import { Field, ObjectType, Int } from '@nestjs/graphql';
import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm';
import { Company } from '../../company/entities/company.entity';

@ObjectType()
@Entity({ name: 'locations' })
export class Location extends BaseEntity {
    @Field(type => Int, { description: `ID of the location` })
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Field({ description: `companies id` })
    @Column({name: 'companies_id'})
    companyId: number;

    @OneToOne(type => Company)
    @JoinColumn({name: 'companies_id'})    
    company: Company;

    @Field({ description: `latitud` })
    @Column({ type: 'decimal', precision: 10, scale: 6, nullable: false })
    lat: number;

    @Field({ description: `longitud` })
    @Column({ type: 'decimal', precision: 11, scale: 6, nullable: false })
    lng: number;

    @Field()
    @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
    createAdt: Date;

    @Field()
    @UpdateDateColumn({ type: 'timestamp', name: 'update_at' })
    createUpd: Date;

}
