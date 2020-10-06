import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './entities';
import { UsersService } from './services/users.service';
import RepoUser from './repositories/user.repository';
import { UsersResolver } from './resolvers/users.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UsersService, UsersResolver, RepoUser],
    exports: [RepoUser, UsersService]
})
export class UserModule {}
