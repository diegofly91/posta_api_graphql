import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    BeforeInsert,
    BeforeUpdate,
    JoinColumn,
} from 'typeorm';
import { Field, ObjectType, Int } from '@nestjs/graphql';
import { hash } from 'bcryptjs';
import { Role } from './role.entity';

@ObjectType()
@Entity({ name: 'users' })
export class User {
    @Field(type => Int, { description: `ID of the user` })
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Field({ nullable: true, description: `name mail` })
    @Column({ type: 'varchar', nullable: false, length: 60, unique: true })
    email: string;

    @Field({ nullable: true, description: `name password` }) 
    @Column({ type: 'varchar', nullable: false, length: 64 })
    password: string;

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
      if (!this.password) {
        return;
      }
      this.password = await hash(this.password, 10);
    }

    @Field()
    @Column({ type: 'boolean', nullable: true, name: 'is_active', default: 1 })
    isActive: boolean;

    @Field({ description: `role id` })
    @Column({name: 'roles_id'})
    roleId: number;

    @ManyToOne(() => Role, role => role.user, {nullable: false })
    @JoinColumn({name: 'roles_id'})    
    role: Role;

    @Field()
    @CreateDateColumn({ type: 'timestamp', nullable: true, name: 'created_at' })
    createdAt: Date;

    @Field()
    @UpdateDateColumn({ type: 'timestamp', nullable: true, name: 'updated_at' })
    updatedAt: Date;
}
