import { Field, ObjectType, Int } from '@nestjs/graphql';
import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Service } from '../../services/entities/service.entity';
import { Employee } from '../../employees/entities/employee.entity';
import { Timetable } from '../../timetables/entities/timetable.entity';
import { Discount } from '../../discounts/entities/discount.entity';
import { Category } from '../../categories/entities/categories.entity'

@ObjectType()
@Entity({ name: 'companies' })
export class Company extends BaseEntity {
    @Field(type => Int, { description: `ID of the company` })
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Field({ description: `category id` })
    @Column({name: 'categories_id'})
    categoryId: number;

    @ManyToOne(() => Category, category => category.company, {nullable: false })
    @JoinColumn({name: 'categories_id'})    
    category: Category;

    @Field({ description: `name company` })
    @Column({ type: 'varchar', nullable: false, length: 50 })
    name: string;

    @Field({ description: `company description` })
    @Column({ type: 'varchar', nullable: true, length: 150 })
    description: string;

    @Field({ description: `company address` })
    @Column({ type: 'varchar', nullable: true, length: 100 })
    address: string;

    @Field({ description: `phone company` })
    @Column({ type: 'varchar', nullable: true, length: 20 })
    mobile: string;

    @Field()
    @Column({ type: 'boolean', default: 1 })
    status: boolean;

    @Field()
    @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
    createAdt: Date;

    @Field()
    @UpdateDateColumn({ type: 'timestamp', name: 'update_at' })
    createUpd: Date;

    @OneToMany(
        type => Service,
        service => service.company,
        { cascade: true },
    )
    services: Service[];

    @OneToMany(
        type => Employee,
        employee => employee.company,
        { cascade: true },
    )
    employees: Employee[];

    @OneToMany(
        type => Timetable,
        timetable => timetable.company,
        { cascade: true },
    )
    timetables: Timetable[];

    @OneToMany(type => Discount, discount => discount.company, { cascade: true })
    discounts: Discount[];

}
