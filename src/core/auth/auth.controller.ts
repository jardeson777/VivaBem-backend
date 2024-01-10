import { Body, Controller, Post } from '@nestjs/common';
import { SignUpInput } from './dto/sign-up.dto';
import { UserService } from '../user/user.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UserService) {
    //
  }

  @Post('sign-up')
  register(@Body() body: SignUpInput) {
    return this.userService.create(body);
  }

  @Post('login')
  create() {
    // return this.authService.login();
  }
}
