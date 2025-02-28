import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hash } from 'bcryptjs';
import { User } from './models/user.entity';
import { UserCreateInput } from './models/user-create.input';
import { UserUpdateInput } from './models/user-update.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async findOneById(id: string): Promise<User | null> {
    const user = this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  async findOneByUsername(username: string): Promise<User | null> {
    return this.userRepository.findOneBy({ username });
  }

  async find(): Promise<User[]> {
    return this.userRepository.find();
  }

  async create(userCreateInput: UserCreateInput) {
    userCreateInput.password = await hash(userCreateInput.password, 10);
    const newUser = this.userRepository.create(userCreateInput);
    return this.userRepository.save(newUser);
  }

  async update(userUpdateInput: UserUpdateInput) {
    const { id, ...data } = userUpdateInput;
    return this.userRepository.update({ id }, data);
  }

  async delete(id: string) {
    return this.userRepository.delete({ id });
  }
}
