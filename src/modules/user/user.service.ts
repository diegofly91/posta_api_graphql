import {
    Injectable,
    BadRequestException,
    NotFoundException,
} from '@nestjs/common';
import RepoUser from './user.repository';
import { User } from './user.entity';
import { UserInput, NewUserInput } from './userDto/user.Input';

@Injectable()
export class UserService {
    constructor(private readonly repos: RepoUser) {}

    async getUser(id: number): Promise<User> {
        return await this.repos._userRepository.findOne(id);
    }

    async getUsers(): Promise<User[]> {
        return await this.repos._userRepository.find();
    }

    async createUser(input: NewUserInput): Promise<User> {
        const user = await this.repos._userRepository.findOne({  where: { email: input.email.toLowerCase().trim() },});
        if (user){
            throw new BadRequestException('User already registered with email');
        } 
        const newUser = this.repos._userRepository.create(input);
        const savedUser: User = await this.repos._userRepository.save(newUser);
        return savedUser;
        
    }

    async updateUser(id: number, input: UserInput): Promise<boolean> {
        const user = await this.repos._userRepository.update(id, input);
        if (user) {return true;}
        else {throw new NotFoundException();}
    }
    
    async deleteUser(id: number): Promise<boolean> {
        const dele = await this.repos._userRepository.delete(id);
        if (dele) {return true;
        }else {throw new NotFoundException();}
    }
}
