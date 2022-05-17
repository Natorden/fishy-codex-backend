import { Module } from '@nestjs/common';
import { FriendsService } from '../domain/friends.service';
import { FriendsController } from './friends.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FriendSchema } from '../infrastructure/typeORM/schemas/friend.schema';
import { UsersModule } from '../users/users.module';
import { FriendRepositoryAdapter } from '../infrastructure/typeORM/adapters/friendRepository.adapter';
import { IFriendRepository } from '../domain/borders/friendRepository.interface';

@Module({
  imports: [TypeOrmModule.forFeature([FriendSchema]), UsersModule],
  controllers: [FriendsController],
  providers: [
    {
      provide: 'FriendRepository',
      useClass: FriendRepositoryAdapter,
    },
    {
      inject: ['FriendRepository'],
      provide: 'FriendService',
      useFactory: (friendRepository: IFriendRepository) =>
        new FriendsService(friendRepository),
    },
  ],
})
export class FriendsModule {}
