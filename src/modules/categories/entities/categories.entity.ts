import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    BaseEntity
} from 'typeorm';
import { Company } from '../../companies/entities/companies.entity';

@Entity({ name: 'categories' })
export class Category  extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @OneToMany(
        () => Company,
        company => company.category
    )
    company: Company[];

    @Column({ type: 'varchar', unique: true, length: 30 })
    name: String;

    @Column({ type: 'varchar', nullable: true, length: 150 })
    description: String;

    @Column({ type: 'varchar', nullable: true, length: 120 })
    logo: String;

    @Column({ name: 'categories_id', nullable: true })
    categoryId: number;

    @CreateDateColumn({ type: 'timestamp', nullable: true, name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', nullable: true, name: 'updated_at' })
    updatedAt: Date;
}
