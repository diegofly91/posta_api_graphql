import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', nullable: false, length: 60, unique: true })
    email: string;
    
    @Column({ type: 'varchar', nullable: false, length: 30, unique: true })
    username: string;
    
    @Column({ type: 'varchar', nullable: false, length: 64 })
    password: string;

    @Column({ type: 'boolean', nullable: true, name: 'is_active', default: 1 })
    isActive: boolean;

    @CreateDateColumn({ type: 'timestamp', nullable: true, name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', nullable: true, name: 'updated_at' })
    updatedAt: Date;
}
