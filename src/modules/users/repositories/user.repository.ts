import { BadRequestException, NotFoundException, HttpStatus } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto, UpdateUserDto, LoginUserDto } from '../dtos/user.Input'
import { comparePasswords } from '../../../shared/utils'

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
    // async findByLogin({ email, password }: LoginUserDto): Promise<string> {    
    //     const user = await this._userRepository.findOne({ where: { email } });
        
    //     if (!user) {
    //         throw new BadRequestException('User not found');    
    //     }
        
    //     // compare passwords    
    //     const areEqual = await comparePasswords(user.password, password);
        
    //     if (!areEqual) {
    //         throw new BadRequestException('Invalid credentials');    
    //     }
        
    //     // return toUserDto(user);  
    // }

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const existsUser = await this.existsUser(createUserDto);
        if (existsUser) {
            throw new BadRequestException(`The user already registered.`);
        }
        const user = new User();
        user.email = createUserDto.email;
        user.password = createUserDto.password;
        user.roleId = createUserDto.roleId;
        user.isActive = createUserDto.isActive;

        const savedUser: User = await this._userRepository.save(user);
        return savedUser;
    }

    async updateUser(
        id: number,
        updateUserDto: UpdateUserDto,
    ): Promise<boolean> {
        const user = new User();
        user.id = id;
        user.email = updateUserDto.email;
        user.password = updateUserDto.password;
        user.isActive = updateUserDto.isActive;
        user.hashPassword();
        const userUpdated = await this._userRepository.save(user);
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
