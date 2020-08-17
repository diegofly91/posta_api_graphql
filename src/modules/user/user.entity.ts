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
@Entity({ name: 'users' })
export class User extends BaseEntity {
    @Field(type => Int, { description: `ID of the user` })
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Field({ nullable: true, description: `name user` })
    @Column({ type: 'varchar', nullable: false, length: 50 })
    username: string;

    @Field({ nullable: true, description: `name mail` })
    @Column({ type: 'varchar', nullable: false, length: 50 })
    email: string;

    @Field({ nullable: true, description: `name password` })
    @Column({ type: 'varchar', nullable: false, length: 50 })
    password: string;

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
