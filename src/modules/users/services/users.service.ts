import { Injectable } from '@nestjs/common';
import { User } from '../entities';
import  RepoUser from '../repositories/user.repository';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.Input';

@Injectable()
export class UsersService {
    constructor(private userRepository: RepoUser) {}

    async getUsers(): Promise<User[]> {
        return await this.userRepository.getUsers();
    }

    async getUser(id: number): Promise<User> {
        return await this.userRepository.getUser(id);
    }

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        return this.userRepository.createUser(createUserDto);
    }

    async updateUser( id: number, updateUserDto: UpdateUserDto): Promise<boolean> {
        return await this.userRepository.updateUser(id, updateUserDto);
    }

    async deleteUser(id: number): Promise<boolean> {
        return await this.userRepository.deleteUser(id);
    }
}
