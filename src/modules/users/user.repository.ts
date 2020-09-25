import { BadRequestException, NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { User } from './entity';
import { CreateUserDto, UpdateUserDto } from './dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async findAll(): Promise<User[]> {
        return await this.find();
    }

    async findOneById(userId: number): Promise<User> {
        return await this.findOne(userId);
    }

    async findByEmail(email: string): Promise<User> {
        return await this.findOne({ email });
    }

    async existsUser(createUserDto: CreateUserDto): Promise<boolean> {
        const existsUser = await this.createQueryBuilder('user')
            .select()
            .where('user.email = :email', { email: createUserDto.email })
            .getOne();

        return !!existsUser;
    }

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const existsUser = await this.existsUser(createUserDto);
        if (existsUser) {
            throw new BadRequestException(`The user already registered.`);
        }

        const user = new User();
        user.email = createUserDto.email;
        user.password = createUserDto.password;
        user.isActive = createUserDto.isActive;

        return this.save(user);
    }

    async updateUser(
        id: number,
        updateUserDto: UpdateUserDto,
    ): Promise<boolean> {
        const userUpdated = await this.update(id, updateUserDto);
        if (!userUpdated) {
            throw new NotFoundException();
        }

        return true;
    }

    async deleteUser(id: number): Promise<void> {
        const userDeleted = await this.delete(id);
        if (!userDeleted) {
            throw new NotFoundException();
        }
    }
}
