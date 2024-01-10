import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './auth.controller';
import { UserService } from '../user/user.service';
import { UserRepository } from '../user/user.repository';
import { PrismaService } from '../../shared/database/prisma.service';
import { PasswordService } from './services/password.service';
import { TokenService } from './services/token.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    UserService,
    UserRepository,
    PrismaService,
    PasswordService,
    TokenService,
    ConfigService,
    JwtService,
  ],
})
export class AuthModule {
  //
}
