import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FishyModule } from './fishy/fishy.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [UsersModule, FishyModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
