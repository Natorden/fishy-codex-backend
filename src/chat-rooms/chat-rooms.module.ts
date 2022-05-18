import { Module } from '@nestjs/common';
import { ChatRoomsService } from '../domain/chat-rooms.service';
import { ChatRoomsController } from './chat-rooms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatRoomSchema } from '../infrastructure/typeORM/schemas/chatRoom.schema';
import { ChatRoomRepositoryAdapter } from '../infrastructure/typeORM/adapters/chatRoomRepository.adapter';

@Module({
  controllers: [ChatRoomsController],
  imports: [TypeOrmModule.forFeature([ChatRoomSchema])],
  providers: [
    ChatRoomsService,
    {
      provide: 'ChatRoomRepository',
      useClass: ChatRoomRepositoryAdapter,
    },
  ],
})
export class ChatRoomsModule {}
