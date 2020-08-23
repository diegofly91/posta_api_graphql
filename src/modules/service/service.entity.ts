import { Field, ObjectType, Int } from '@nestjs/graphql';
import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    ManyToMany,
    CreateDateColumn,
    UpdateDateColumn,
    JoinTable,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'services' })
export class Service extends BaseEntity {
    @Field(type => Int, { description: `ID of the service` })
    @PrimaryGeneratedColumn('increment')
    id: number;

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

    // @OneToOne((type) => Company, {
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
