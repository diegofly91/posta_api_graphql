import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UserRepository } from './user.repository';
import { UsersController } from './users.controller';

@Module({
    imports: [TypeOrmModule.forFeature([UserRepository])],
    providers: [UsersService],
    exports: [TypeOrmModule],
    controllers: [UsersController],
})
export class UsersModule {}
