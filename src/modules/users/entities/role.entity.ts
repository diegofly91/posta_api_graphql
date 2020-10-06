import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, ObjectType, Int } from '@nestjs/graphql';

// import { OperationRole } from './operations_roles.entity2'
import { User } from './user.entity';

@ObjectType()
@Entity({ name: 'roles' })
export class Role {
    
    @Field(type => Int, { description: `ID of the role` })
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Field()
    @Column({ type: 'varchar', nullable: false, length: 60 })
    name: String;

    @Field()
    @CreateDateColumn({ type: 'timestamp', nullable: true, name: 'created_at' })
    createdAt: Date;

    // @OneToMany(
    //     () => OperationRole,
    //     operationrole => operationrole.operation
    // )
    // operationsroles: OperationRole[];

    @OneToMany(() => User,user => user.role, { cascade: true })
    user: User[];

}