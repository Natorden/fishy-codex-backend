import { EntitySchema } from 'typeorm';
import { Chat } from '../../../domain/core/chat.entity';

export const ChatSchema = new EntitySchema<Chat>({
  name: 'Chat',
  target: Chat,
  columns: {
    uuid: {
      type: 'uuid',
      primary: true,
      generated: 'uuid',
    },
    text: {
      type: 'varchar',
    },
  },
  relations: {
    chatRoom: {
      type: 'many-to-one',
      target: 'ChatRoom',
      joinColumn: true,
    },
    user: {
      type: 'many-to-one',
      target: 'User',
      joinColumn: true,
    },
  },
});
