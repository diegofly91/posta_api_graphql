
import { Field, ObjectType, InputType } from '@nestjs/graphql';
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
	JoinTable
} from 'typeorm';
// import { UserDetails } from './user.details.entity';
// import { Role } from '../role/role.entity';

@Entity({ name: 'user' })
export class User extends BaseEntity {
	@Field()
	@PrimaryGeneratedColumn('increment') id: number;

    @Field()
	@Column({ type: 'varchar', length: 36, nullable: false })
	username: String;

	@Field()
	@Column({ type: 'varchar', nullable: false })
	email: String;

	@Field()
	@Column({ type: 'varchar', nullable: false })
	password: String;

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
	status: Boolean;

	@Field()
	@CreateDateColumn({ type: 'timestamp', name: 'created_at' })
	createAdt: Date;

	@Field()
	@UpdateDateColumn({ type: 'timestamp', name: 'update_at' })
	createUpd: Date;
}

@InputType()
export class UserInput {
 
  @Field()
  readonly username: string;

  @Field()
  readonly email: string;

  @Field()
  readonly password: string;

  @Field()
  readonly status: boolean;
}
