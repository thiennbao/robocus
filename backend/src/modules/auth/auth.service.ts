import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AuthLoginInput } from './models/auth-login.input';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(data: AuthLoginInput) {
    const user = await this.userService.findOneByUsername(data.username);
    const isMatched = user && (await compare(data.password, user.password));
    if (!isMatched) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.username };
    const token = await this.jwtService.signAsync(payload);
    return { token };
  }
}
