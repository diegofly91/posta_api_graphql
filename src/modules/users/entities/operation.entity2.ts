// import {
//     Column,
//     CreateDateColumn,
//     Entity,
//     OneToMany,
//     ManyToOne,
//     JoinColumn,
//     PrimaryGeneratedColumn
// } from 'typeorm';
// import { Field, ObjectType, Int } from '@nestjs/graphql';
// import { OperationRole } from './operations_roles.entity2'
// import { Module } from './module.entity2'

// @ObjectType()
// @Entity({ name: 'operations' })
// export class Operation {
    
//     @Field(type => Int, { description: `ID of the operations` })
//     @PrimaryGeneratedColumn('increment')
//     id: number;

//     @Field()
//     @Column({ type: 'varchar', nullable: false, length: 60 })
//     name: String;

//     @Field()
//     @CreateDateColumn({ type: 'timestamp', nullable: true, name: 'created_at' })
//     createdAt: Date;

//     @OneToMany(
//         () => OperationRole,
//         operationrole => operationrole.operation
//     )
//     operationsroles: OperationRole[];

//     @Field({ description: `module id` })
//     @Column({name: 'modules_id'})
//     moduleId: number;

//     @ManyToOne(() => Module, module => module.operation, {nullable: false })
//     @JoinColumn({name: 'modules_id'})    
//     module: Module;

// }