import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FishyModule } from './fishy/fishy.module';
import { LoginModule } from './login/login.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: './database/fishyCodex.db',
      autoLoadEntities: true,
      type: 'sqlite',
      synchronize: true,
    }),

    UsersModule,
    FishyModule,
    LoginModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
