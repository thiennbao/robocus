import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { User } from './models/user.entity';
import { UserService } from './user.service';
import { UserCreateInput } from './models/user-create.input';
import { UserUpdateInput } from './models/user-update.input';
import { JwtGuard } from '../../guards/jwt.guard';

@Resolver()
@UseGuards(JwtGuard)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  async user(@Args('id') id: string): Promise<User | null> {
    const user = await this.userService.findOneById(id);
    return user;
  }

  @Query(() => [User])
  async users(): Promise<User[]> {
    const users = await this.userService.find();
    return users;
  }

  @Mutation(() => User)
  async createUser(@Args('data') data: UserCreateInput) {
    const newUser = await this.userService.create(data);
    return newUser;
  }

  @Mutation(() => Boolean)
  async updateUser(@Args('data') data: UserUpdateInput) {
    await this.userService.update(data);
    return true;
  }

  @Mutation(() => Boolean)
  async deleteUser(@Args('id') id: string) {
    await this.userService.delete(id);
    return true;
  }
}
