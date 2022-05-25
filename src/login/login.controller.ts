import { Body, Controller, Inject, Post } from '@nestjs/common';
import { UsersService } from '../domain/users.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { User } from '../domain/core/user.entity';

@Controller('login')
export class LoginController {
  constructor(
    @Inject('UserService') private readonly userService: UsersService,
  ) {}

  @Post()
  create(@Body() createLoginDto: CreateLoginDto): Promise<User> {
    return this.userService.login(
      createLoginDto.email,
      createLoginDto.password,
    );
  }
}
