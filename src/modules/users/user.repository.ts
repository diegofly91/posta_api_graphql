import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { BadRequestException } from '@nestjs/common';

@EntityRepository(User)
export class UserRepository extends Repository<User> {

    async findAll(): Promise<User[]> {
        return await this.find();
    }

    async findOneById(userId: number): Promise<User> {
        return await this.findOne(userId);
    }

    async findByUsername(username: string): Promise<User> {
        return await this.findOne({ username });
    }

    async findByEmail(email: string): Promise<User> {
        return await this.findOne({ email });
    }
    
    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const alreadyUser = await this.createQueryBuilder('user')
            .select()
            .where('user.email = :email', { email: createUserDto.email })
            .orWhere('user.username = :username', { username: createUserDto.username })
            .getOne();

        if (alreadyUser) {
            throw new BadRequestException(`The user already registered.`);
        }

        const user = new User();
        user.email = createUserDto.email;
        user.username = createUserDto.username;
        user.password = createUserDto.password;
        user.isActive = createUserDto.isActive;
        
        return this.save(user);
    }
}
