import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'profiles' })
export class Profile {
    @Field(type => Int, { description: `ID of the profile` })
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Field({ description: `user id` })
    @Column({name: 'users_id'})
    userId: number;

    @OneToOne(type => User)
    @JoinColumn({name: 'users_id'})    
    user: User;

    @Field()
    @Column({ type: 'varchar', nullable: false, length: 60 })
    firstname: String;

    @Field()
    @Column({ type: 'varchar', nullable: false, length: 60 })
    lastname: String;

    @Field()
    @Column({ type: 'varchar', nullable: false, length: 100 })
    address: String;

    @Field()
    @Column({ type: 'varchar', nullable: false, length: 20 })
    phone: String;

    @Field()
    @CreateDateColumn({ type: 'timestamp', nullable: true, name: 'created_at' })
    createdAt: Date;

    @Field()
    @UpdateDateColumn({ type: 'timestamp', nullable: true, name: 'updated_at' })
    updatedAt: Date;
}
