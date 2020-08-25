import { Field, ObjectType, Int } from '@nestjs/graphql';
import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    ManyToMany,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn,
    JoinTable,
} from 'typeorm';
import { Service } from '../service/service.entity'


@ObjectType()
@Entity({ name: 'companys' })
export class Company extends BaseEntity {
    @Field(type => Int, { description: `ID of the company` })
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Field({ description: `name company` })
    @Column({ type: 'varchar', nullable: false, length: 50 })
    name: string;

    @Field({ description: `company description` })
    @Column({ type: 'varchar', nullable: true, length: 150 })
    description: string;

    @Field({ description: `company address` })
    @Column({ type: 'varchar', nullable: true, length: 100 })
    address: string;

    @Field({ description: `phone company` })
    @Column({ type: 'bigint', nullable: true })
    phone: number;

    @Field()
    @Column({ type: 'boolean', default: 1 })
    status: boolean;

    @Field()
    @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
    createAdt: Date;

    @Field()
    @UpdateDateColumn({ type: 'timestamp', name: 'update_at' })
    createUpd: Date;

    @OneToMany(type => Service, service => service.id_company, { cascade: true })
    service: Service[];

    // @OneToOne((type) => UserDetails, {
    // 	cascade: true,
    // 	nullable: false,
    // 	eager: true
    // })
    // @JoinColumn({ name: 'detail_id' })
    // details: UserDetails;

    // @ManyToMany((type) => Role, (role) => role.users, { eager: true })
    // @JoinTable({ name: 'user_roles' })
    // roles: Role[];
}
