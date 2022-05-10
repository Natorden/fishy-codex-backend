import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { UsersService } from '../domain/users.service';

@Module({
  controllers: [LoginController],
  providers: [UsersService],
})
export class LoginModule {}
