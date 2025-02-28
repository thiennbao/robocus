import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AuthLoginInput } from './models/auth-login.input';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { AuthLoginResponse } from './models/auth-login.response';
import { JwtPayload } from './models/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(data: AuthLoginInput): Promise<AuthLoginResponse> {
    const user = await this.userService.findOneByUsername(data.username);
    const isMatched = user && (await compare(data.password, user.password));
    if (!isMatched) {
      throw new UnauthorizedException();
    }
    const payload: JwtPayload = { id: user.id, username: user.username };
    const token = await this.jwtService.signAsync(payload);
    return { token };
  }

  async validate(payload: JwtPayload): Promise<boolean> {
    const user = this.userService.findOneById(payload.id);
    return !!user;
  }
}
