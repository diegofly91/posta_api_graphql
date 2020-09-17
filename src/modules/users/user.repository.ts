import { EntityManager, EntityRepository } from 'typeorm';
import { User } from './user.entity';

@EntityRepository()
export class UserRepository {

    constructor(private manager: EntityManager) {
    }

    async findAll(): Promise<User[]> {
        return await this.manager.find(User);
    }

    async findOneById(userId: number): Promise<User> {
        return await this.manager.findOne(User, userId);
    }

    async findByUsername(username: string): Promise<User> {
        return await this.manager.findOne(User, { username });
    }

    async findByEmail(email: string): Promise<User> {
        return await this.manager.findOne(User, { email });
    }
}
