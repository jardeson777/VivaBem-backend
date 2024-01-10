import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.dto';
import { User } from './domain/user.entity';
import { UserRepository } from './user.repository';
import { PasswordService } from '../auth/services/password.service';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordService: PasswordService,
  ) {
    //
  }

  async create(input: CreateUserInput) {
    const user = new User(
      input.email,
      input.firstName,
      input.lastName,
      await this.passwordService.hashPassword(input.password),
      input.birthday,
      input.gender,
      input.weight,
      input.height,
    );

    return this.userRepository.save(user);
  }

  async findByEmail(email: string) {
    return this.userRepository.findByEmail(email);
  }
}
