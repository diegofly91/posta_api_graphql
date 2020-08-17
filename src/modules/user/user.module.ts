import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserResolvers } from './user.resolver';
import { User } from './user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserService, UserResolvers],
    exports: [UserService],
})
export class UserModule {}
