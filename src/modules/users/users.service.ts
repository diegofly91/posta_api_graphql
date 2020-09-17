import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
    constructor(
        private userRepository: UserRepository
    ) {}

    async getUsers(): Promise<User[]> {
        return await this.userRepository.findAll();
    }
    
    async getUserById(id: number): Promise<User> {
        return await this.userRepository.findOneById(id);
    }
    
    async remove(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }
}
