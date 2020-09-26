import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UserRepository } from './user.repository';
import { UsersController } from './users.controller';
import { UsersResolver } from './users.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([UserRepository])],
    providers: [UsersService, UsersResolver],
    exports: [TypeOrmModule],
    controllers: [UsersController],
})
export class UsersModule {}
