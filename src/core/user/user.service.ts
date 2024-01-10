import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.dto';
import { User } from './domain/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {
    //
  }

  async create(input: CreateUserInput) {
    const user = new User(
      input.email,
      input.firstName,
      input.lastName,
      input.password,
      input.birthday,
      input.gender,
      input.weight,
      input.height,
    );

    return this.userRepository.save(user);
  }
}
