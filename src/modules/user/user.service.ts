import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, } from './user.entity';
import {  UserInput, NewUserInput } from './userDto/user.Input';


@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private _userRepository: Repository<User>,
	  ) {}

    async getUser(id: number): Promise<User> {
		return await this._userRepository.findOne(id);
	}

	async getUsers(): Promise<User[]> {
		return  await this._userRepository.find();
	}

	async createUser(input: NewUserInput): Promise<User> {
		let user = await this._userRepository.findOne({
			where: { email: input.email.toLowerCase().trim() },
		});
		if (!user) {
			const savedUser: User = await this._userRepository.save(input);
			return savedUser;
		}else{
			throw new NotFoundException('exist mail');
		}
		
	}
	async updateUser(id: number,input: UserInput): Promise<boolean> {
		
		const user =  await this._userRepository.update(id,input);
		if(user)
			 return true;
		else
		     throw new NotFoundException();	 
	}
	async deleteUser(id: number): Promise<boolean> {
		const dele =  await this._userRepository.delete(id);
		if(dele)
		        return true;
		else
				throw new NotFoundException();	 
	}
}