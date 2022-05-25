import { User } from '../../../domain/core/user.entity';
import { EntitySchema } from 'typeorm';
import { Fish } from '../../../domain/core/fish.entity';

export const UserSchema = new EntitySchema<User>({
  name: 'User',
  target: User,
  columns: {
    uuid: {
      type: 'uuid',
      generated: 'uuid',
      primary: true,
    },
    name: {
      type: 'varchar',
    },
    age: {
      type: 'int',
    },
    email: {
      type: 'varchar',
    },
    password: {
      type: 'varchar',
    },
    avatar: {
      type: 'varchar',
    },
  },
  relations: {
    fish: {
      type: 'one-to-many',
      target: 'Fish',
      inverseSide: 'User',
    },
    chats: {
      type: 'one-to-many',
      target: 'Chat',
      inverseSide: 'user',
    },
    chatRooms: {
      type: 'one-to-many',
      target: 'ChatRoom',
      inverseSide: 'user',
    },
  },
});
