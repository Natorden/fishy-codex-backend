import { EntitySchema } from 'typeorm';
import { Friend } from '../../../domain/core/friend.entity';

export const FriendSchema = new EntitySchema<Friend>({
  name: 'Friend',
  target: Friend,
  columns: {
    uuid: {
      type: 'uuid',
      primary: true,
      generated: 'uuid',
    },
    userOneId: {
      type: 'uuid',
    },
    userTwoId: {
      type: 'uuid',
    },
  },
});
