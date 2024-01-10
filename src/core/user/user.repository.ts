import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../shared/database/prisma.service';
import { User } from './domain/user.entity';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {
    //
  }

  async save(user: User) {
    await this.prisma.user.create({
      data: {
        email: user.getEmail(),
        password: user.getPassword(),
        birthday: user.getBirthday(),
        first_name: user.getFirstName(),
        last_name: user.getLastName(),
        gender: user.getGender(),
        weight: user.getWeight(),
        height: user.getHeight(),
      },
    });
  }
}
