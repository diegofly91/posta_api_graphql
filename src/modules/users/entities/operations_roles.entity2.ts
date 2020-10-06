// import {
//     Column,
//     Entity,
//     PrimaryGeneratedColumn,
//     JoinColumn,
//     ManyToOne,
//     OneToOne
// } from 'typeorm';
// import { Field, ObjectType, Int } from '@nestjs/graphql';
// import { Role } from './role.entity';
// import { Operation } from './operation.entity2';

// @ObjectType()
// @Entity({ name: 'operations_roles' })
// export class OperationRole {
//     @Field(type => Int, { description: `ID of the opreation roles` })
//     @PrimaryGeneratedColumn('increment')
//     id: number;

//     @Field({ description: `role id` })
//     @Column({name: 'roles_id'})
//     roleId: number;

//     // @ManyToOne(() => Role, role => role.operationsroles, {nullable: false })
//     // @JoinColumn({name: 'roles_id'})    
//     // role: Role;

//     @Field({ description: `operation id` })
//     @Column({name: 'operations_id'})
//     operationId: number;

//     @ManyToOne(() => Operation, operation => operation.operationsroles, {nullable: false })
//     @JoinColumn({name: 'operations_id'})    
//     operation: Operation;

// }