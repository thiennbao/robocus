import { Args, Resolver, Query } from '@nestjs/graphql';
import { UserService } from './user.service';
import { NotFoundException } from '@nestjs/common';
import { User } from './user.model';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  async user(@Args('id') id: string): Promise<User> {
    const user = await this.userService.findOneById(id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }
}
