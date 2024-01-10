import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../../user/user.service';
import { PasswordService } from './password.service';
import { TokenService } from './token.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly passwordService: PasswordService,
    private readonly tokenService: TokenService,
  ) {
    //
  }

  register() {
    return 'This action adds a new auth';
  }

  async authenticate(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const passwordMatched = await this.validatePasswords(
      user.password,
      password,
    );

    if (!passwordMatched) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.tokenService.generateToken({
      sub: user.id,
      email: user.email,
    });
  }

  async validatePasswords(
    userPassword: string,
    inputPassword: string,
  ): Promise<boolean> {
    const passwordValid = await this.passwordService.validatePassword(
      inputPassword,
      userPassword,
    );

    return passwordValid;
  }
}
