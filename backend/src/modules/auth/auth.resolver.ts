import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthLoginInput } from './models/auth-login.input';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => String)
  async login(@Args('data') data: AuthLoginInput) {
    const token = await this.authService.login(data);
    console.log(token);

    return 'temp';
  }
}
