import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
  async findOneById(id: string): Promise<User> {
    return { id, username: 'test', password: 'test' };
  }
}
