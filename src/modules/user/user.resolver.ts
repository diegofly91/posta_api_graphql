import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import  { UserService } from './user.service';
import { User, UserInput } from './user.entity';

@Resolver(() => User)
export class UserResolvers {
  constructor(private readonly _userService: UserService) {}

  @Query(() => [User])
  public async getUsers(): Promise<User[]> {
    return this._userService.getUsers();
  }

  @Query(() => User, { nullable: true })
  public async getUser(@Args('id') id: number): Promise<User> {
    return this._userService.getUser(id);
  }

  @Mutation(() => User, { nullable: true })
  public async createUser(@Args('input') input: UserInput): Promise<User> {
    return await this._userService.createUser(input);
  }

  @Mutation(() => User)
  public async updateUser(@Args('id') id: number, @Args('input')  input: UserInput): Promise<boolean> {
    return await this._userService.updateUser(id,input);
  }

  @Mutation(() => User)
  public async deleteUser(@Args('id') id: number): Promise<boolean> {
    return await this._userService.deleteUser(id);
  }

  
  // @Subscription(() => User)
  // countUser(){

  // }
}