import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from '../user/user.service';
import { UserRepository } from '../user/user.repository';
import { PrismaService } from '../../shared/database/prisma.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService, UserRepository, PrismaService],
})
export class AuthModule {
  //
}
