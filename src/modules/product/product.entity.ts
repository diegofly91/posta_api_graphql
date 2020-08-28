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
import { Company } from '../company/company.entity';

@ObjectType()
@Entity({ name: 'products' })
export class Product extends BaseEntity {
    @Field(type => Int, { description: `ID of the service` })
    @PrimaryGeneratedColumn('increment')
    id: number;

    @PrimaryColumn({name: 'companys_id'})
    companyId: number;

    @ManyToOne(() => Company, company => company.products, {primary:true})
    @JoinColumn({name: 'companys_id'})
    company: Company;

    @Field({ description: `name service` })
    @Column({ type: 'varchar', nullable: false, length: 50 })
    name: string;

    @Field({ description: `service description` })
    @Column({ type: 'varchar', nullable: true, length: 150 })
    description: string;

    @Field({ description: `price service` })
    @Column({ type: 'float', nullable: false })
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
