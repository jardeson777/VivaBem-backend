import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { PrismaService } from '../../shared/database/prisma.service';
import { PasswordService } from '../auth/services/password.service';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository, PrismaService, PasswordService],
})
export class UserModule {
  //
}
