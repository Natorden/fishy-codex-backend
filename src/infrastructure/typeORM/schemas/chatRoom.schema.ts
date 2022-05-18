import { EntitySchema } from 'typeorm';
import { ChatRoom } from '../../../core/chat-room.entity';

export const ChatRoomSchema = new EntitySchema<ChatRoom>({
  name: 'ChatRoom',
  target: ChatRoom,
  columns: {
    uuid: {
      type: 'uuid',
      primary: true,
      generated: 'uuid',
    },
    name: {
      type: 'varchar',
    },
  },
  relations: {
    chats: {
      type: 'one-to-many',
      target: 'Chat',
      inverseSide: 'chatRoom',
    },
    user: {
      type: 'many-to-one',
      target: 'User',
      joinColumn: true,
    },
  },
});
