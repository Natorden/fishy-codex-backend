import { Controller, Post, Body, Inject } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UsersService } from '../domain/users.service';
import { User } from '../core/user.entity';

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
