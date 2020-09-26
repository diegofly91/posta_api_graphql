import { Field, ObjectType, Int } from '@nestjs/graphql';
import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn
} from 'typeorm';
import { Company } from '../../company/entities/company.entity';

@ObjectType()
@Entity({ name: 'discounts' })
export class Discount extends BaseEntity {

    @Field(type => Int, { description: `ID of the descount` })
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Field({ description: `ID  company` })
    @Column({name: 'companies_id'})
    companyId: number;
    
    @ManyToOne(() => Company, company => company.discounts, {primary:true})
    @JoinColumn({name: 'companies_id'})
    company: Company;

    @Field({ description: `name discount` })
    @Column({ type: 'varchar', nullable: false, length: 50 })
    name: string;

    @Field({ description: `discount %` })
    @Column({ type: 'smallint', nullable: false })
    discount: number;

    @Field({ description: `discount description` })
    @Column({ type: 'varchar', nullable: true, length: 200 })
    description: string;

    @Field({ description: `date init` })
    @Column({ type: 'date', nullable: true })
    dateIni: Date;

    @Field({ description: `date init` })
    @Column({ type: 'date', nullable: true })
    dateEnd: Date;

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
