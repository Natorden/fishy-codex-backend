import { Module } from '@nestjs/common';
import { ChatRoomsService } from '../domain/chat-rooms.service';
import { ChatRoomsController } from './chat-rooms.controller';
import { ChatRepositoryAdapter } from '../infrastructure/typeORM/adapters/chatRepository.adapter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatRoomSchema } from '../infrastructure/typeORM/schemas/chatRoom.schema';

@Module({
  imports: [TypeOrmModule.forFeature([ChatRoomSchema])],
  controllers: [ChatRoomsController],
  providers: [
    ChatRoomsService,
    {
      provide: 'ChatRoomRepository',
      useClass: ChatRepositoryAdapter,
    },
  ],
})
export class ChatRoomsModule {}
