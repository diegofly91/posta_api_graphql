import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import RepoUser from './user.repository';
import { UserService } from './user.service';
import { UserResolvers } from './user.resolver';
import { User } from './user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [RepoUser,UserService, UserResolvers],
    exports: [RepoUser,UserService],
})
export class UserModule {}
