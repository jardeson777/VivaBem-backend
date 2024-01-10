import { Body, Controller, Post } from '@nestjs/common';
import { SignUpInput } from './dtos/sign-up.dto';
import { UserService } from '../user/user.service';
import { AuthService } from './services/auth.service';
import { AuthenticateInput } from './dtos/authenticate-input.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {
    //
  }

  @Post('sign-up')
  register(@Body() body: SignUpInput) {
    return this.userService.create(body);
  }

  @Post('login')
  create(@Body() authenticateInput: AuthenticateInput) {
    return this.authService.authenticate(
      authenticateInput.email,
      authenticateInput.password,
    );
  }
}
