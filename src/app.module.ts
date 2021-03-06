import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FishyModule } from './fishy/fishy.module';
import { LoginModule } from './login/login.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatsModule } from './chats/chats.module';
import { ChatRoomsModule } from './chat-rooms/chat-rooms.module';
import { FriendsModule } from './friends/friends.module';
import { FriendRequestsModule } from './friend-requests/friend-requests.module';

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
    ChatsModule,
    ChatRoomsModule,
    FriendsModule,
    FriendRequestsModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
