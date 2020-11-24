import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import { User } from '../../users/entities';
import { Company } from './companies.entity';

@Entity('companies_follows')
export class CompanyFollow {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({name: 'company_id'})
    companyId: number;
    @ManyToOne(
        () => Company,
        company => company.companyFollow,
    )
    @JoinColumn({ name: 'company_id' })
    company!: Company;

    @Column({name: 'user_id'})
    userId: number;
    @ManyToOne(
        () => User,
        user => user.companyFollow,
    )
    @JoinColumn({ name: 'user_id' })
    user!: User;

    @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
    createAdt: Date;

}
