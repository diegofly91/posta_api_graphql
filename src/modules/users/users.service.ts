import { Injectable } from '@nestjs/common';
import { User } from './entity';
import { UserRepository } from './user.repository';
import { CreateUserDto, UpdateUserDto } from './dto';

@Injectable()
export class UsersService {
    constructor(private userRepository: UserRepository) {}

    async getUsers(): Promise<User[]> {
        const users = await this.userRepository.findAll();

        return users.map((user: User) => {
            return user;
        });
    }

    async getUserById(id: number): Promise<User> {
        return await this.userRepository.findOneById(id);
    }

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        return this.userRepository.createUser(createUserDto);
    }

    async updateUser(
        id: number,
        updateUserDto: UpdateUserDto,
    ): Promise<boolean> {
        return await this.userRepository.updateUser(id, updateUserDto);
    }

    async removeUser(id: number): Promise<void> {
        return await this.userRepository.deleteUser(id);
    }
}
