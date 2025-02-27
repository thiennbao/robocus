import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './models/user.model';
import { UserCreateInput } from './models/user-create.input';
import { UserUpdateInput } from './models/user-update.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findOne(id: string): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  async find(): Promise<User[]> {
    return this.userRepository.find();
  }

  async create(userCreateInput: UserCreateInput) {
    const newUser = this.userRepository.create(userCreateInput);
    return this.userRepository.save(newUser);
  }

  async update(userUpdateInput: UserUpdateInput) {
    const { id, ...data } = userUpdateInput;
    return this.userRepository.update({ id }, data);
  }

  async delele(id: string) {
    return this.userRepository.delete({ id });
  }
}
