import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    AfterLoad,
    OneToMany,
    BeforeInsert,
    BeforeUpdate,
    JoinColumn,
} from 'typeorm';
import { Field, ObjectType, Int } from '@nestjs/graphql';
import  {hash} from 'bcryptjs';
import { Role } from './role.entity';
import { CompanyFollow } from '../../companies/entities'


@ObjectType()
@Entity({ name: 'users' })
export class User {
    @Field(type => Int, { description: `ID of the user` })
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Field({ nullable: true, description: `name mail` })
    @Column({ type: 'varchar', nullable: false, length: 60, unique: true })
    email: string;

    @Column({ nullable: false,  type: 'varchar', length: 25, unique: true })
    username: string;

    @Field({ nullable: true, description: `name password` }) 
    @Column({ type: 'varchar', nullable: false, length: 64 })
    public password: string;

    @Field()
    @Column({ type: 'boolean', nullable: true, name: 'is_active', default: 1 })
    isActive: boolean;

    @Field({ description: `role id` })
    @Column({name: 'roles_id'})
    roleId: number;

    @ManyToOne(() => Role, role => role.user,  { nullable: false, onDelete: 'CASCADE' })
    @JoinColumn({name: 'roles_id', referencedColumnName: "id"})    
    role: Role;

    @Field()
    @CreateDateColumn({ type: 'timestamp', nullable: true, name: 'created_at' })
    createdAt: Date;

    @Field()
    @UpdateDateColumn({ type: 'timestamp', nullable: true, name: 'updated_at' })
    updatedAt: Date;

    @OneToMany( type => CompanyFollow, userFollow => userFollow.user,  { cascade: true })
    companyFollow: CompanyFollow[];


    @BeforeUpdate()
    @BeforeInsert()
    hashPassword = async () => {
        if (this.password) {
            this.password = await hash(this.password, 10);
        }    
        return this.password;         
     }
}
