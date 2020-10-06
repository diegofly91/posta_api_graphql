import { BadRequestException, NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.Input';

@EntityRepository(User)
export default  class RepoUser {
    public constructor(
        @InjectRepository(User) public readonly _userRepository: Repository<User>,
      ) {}
    async getUsers(): Promise<User[]> {
        return await this._userRepository.find();
    }

    async getUser(userId: number): Promise<User> {
        return await this._userRepository.findOne(userId);
    }

    async findByEmail(email: string): Promise<User> {
        return await this._userRepository.findOne({ email });
    }

    async existsUser(createUserDto: CreateUserDto): Promise<boolean> {
        const existsUser = await this._userRepository.createQueryBuilder('user')
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

        // const user = new User();
        // user.email = createUserDto.email;
        // user.password = createUserDto.password;
        // user.isActive = createUserDto.isActive;

        const savedUser: User = await this._userRepository.save(createUserDto);
        return savedUser;
    }

    async updateUser(
        id: number,
        updateUserDto: UpdateUserDto,
    ): Promise<boolean> {
        const userUpdated = await this._userRepository.update(id, updateUserDto);
        if (!userUpdated) {
            throw new NotFoundException();
        }

        return true;
    }

    async deleteUser(id: number): Promise<boolean> {
        const userDeleted = await this._userRepository.delete(id);
        if (!userDeleted) {
            throw new NotFoundException();
        }
        return true;
    }
}
