import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthLoginInput } from './models/auth-login.input';
import { AuthLoginResponse } from './models/auth-login.response';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthLoginResponse)
  async login(@Args('data') data: AuthLoginInput): Promise<AuthLoginResponse> {
    const result = await this.authService.login(data);
    return result;
  }
}
