import {
    Args,
    Mutation,
    Query,
    Resolver,
    ResolveField,
    Parent,
} from '@nestjs/graphql';
import { UsePipes, ValidationPipe } from '@nestjs/common';
import { User } from '../entities';
import { UsersService } from '../services/users.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.Input';


import { PaginationArgs } from '../../../shared/graphql/variousDto/various.Input';


@Resolver(() => User)
export class UsersResolver {
    constructor(private readonly usersService: UsersService) {}

    @Query(() => [User])
    async getUsers(): Promise<User[]> {
        return this.usersService.getUsers();
    }

    @Query(() => User, { nullable: true })
    public async getUser(@Args('id') id: number): Promise<User> {
        return this.usersService.getUser(id);
    }

    @UsePipes(new ValidationPipe())
    @Mutation(() => User, { nullable: true })
    public async createCompany(
        @Args('input') input: CreateUserDto,
    ): Promise<User> {
        return await this.usersService.createUser(input);
    }

    @UsePipes(new ValidationPipe())
    @Mutation(() => User, { nullable: true })
    public async updateUser(
        @Args('id') id: number,
        @Args('input') input: UpdateUserDto,
    ): Promise<boolean> {
        return await this.usersService.updateUser(id,input);
    }

    @UsePipes(new ValidationPipe())
    @Mutation(() => User, { nullable: true })
    public async deleteUser(  @Args('id') id: number): Promise<boolean> {
        return await this.usersService.deleteUser(id);
    }
}
