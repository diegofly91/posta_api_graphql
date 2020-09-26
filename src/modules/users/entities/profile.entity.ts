import {
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity({ name: 'profiles' })
export class Profile {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @OneToOne(
        type => User,
        user => user.profile_id,
    )
    @JoinTable()
    user_id: User;

    @Column({ type: 'varchar', nullable: false, length: 60 })
    firstname: String;

    @Column({ type: 'varchar', nullable: false, length: 60 })
    lastname: String;

    @Column({ type: 'varchar', nullable: false, length: 100 })
    address: String;

    @Column({ type: 'varchar', nullable: false, length: 20 })
    phone: String;

    @CreateDateColumn({ type: 'timestamp', nullable: true, name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', nullable: true, name: 'updated_at' })
    updatedAt: Date;
}
