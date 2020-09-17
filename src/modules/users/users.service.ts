import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(
        private userRepository: UserRepository,
    ) {
    }

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

    async removeUser(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }
}
