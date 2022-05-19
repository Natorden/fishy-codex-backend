import { EntitySchema } from 'typeorm';
import { FriendRequest } from '../../../core/friend-request.entity';

export const FriendRequestSchema = new EntitySchema<FriendRequest>({
  name: 'FriendRequest',
  target: FriendRequest,
  columns: {
    uuid: {
      type: 'uuid',
      primary: true,
      generated: 'uuid',
    },
    senderUserId: {
      type: 'uuid',
    },
    receiverUserId: {
      type: 'uuid',
    },
  },
});
