import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    
    constructor(private readonly usersService: UsersService) {}
    
    @Get()
    findAll(): Promise<User[]> {
        return this.usersService.getUsers();
    }
    
    @Get(':id')
    findOne(@Param() id: number): Promise<User> {
        return this.usersService.getUserById(id);
    }
    
    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.createUser(createUserDto);
    }
    
    @Put(':id')
    update(@Param() id: number, @Body() updateUserDto: UpdateUserDto): Promise<boolean> {
        return this.usersService.updateUser(id, updateUserDto);
    }
}
