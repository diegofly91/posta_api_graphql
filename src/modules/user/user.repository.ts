import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
class RepoUser {
  public constructor(
    @InjectRepository(User) public readonly _userRepository: Repository<User>,
  ) {}
}

export default RepoUser;
