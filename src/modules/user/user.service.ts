import {Injectable} from '@nestjs/common';
import RepoUser from './user.repository';
import { User } from './user.entity';
import { UserInput, NewUserInput } from './userDto/user.Input';

@Injectable()
export class UserService {
    constructor(private readonly repo: RepoUser) {}

    async getUser(id: number): Promise<User> {
        return await this.repo.getUser(id);
    }

    async getUsers(): Promise<User[]> {
        return await this.repo.getUsers();
    }

    async createUser(input: NewUserInput): Promise<User> {
        return await this.repo.createUser(input);
    }

    async updateUser(id: number, input: UserInput): Promise<boolean> {
        return await this.repo.updateUser(id,input);
    }
    
    async deleteUser(id: number): Promise<boolean> {
        return await this.repo.deleteUser(id);
    }
}
