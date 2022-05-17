import { Module } from '@nestjs/common';
import { FriendRequestsService } from '../domain/friend-requests.service';
import { FriendRequestsGateway } from './friend-requests.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FriendRequestSchema } from '../infrastructure/typeORM/schemas/friendRequest.schema';
import { UsersModule } from '../users/users.module';
import { FriendRequestsController } from './friend-requests.controller';
import { IFriendRequestRepository } from '../domain/borders/friendRequestRepository.interface';
import { FriendRequestRepositoryAdapter } from '../infrastructure/typeORM/adapters/friendRequestRepository.adapter';

@Module({
  imports: [TypeOrmModule.forFeature([FriendRequestSchema]), UsersModule],
  providers: [
    {
      provide: 'FriendRequestRepository',
      useClass: FriendRequestRepositoryAdapter,
    },
    {
      inject: ['FriendRequestRepository'],
      provide: 'FriendRequestService',
      useFactory: (friendRequestRepository: IFriendRequestRepository) =>
        new FriendRequestsService(friendRequestRepository),
    },
    FriendRequestsGateway,
  ],
  controllers: [FriendRequestsController],
})
export class FriendRequestsModule {}
