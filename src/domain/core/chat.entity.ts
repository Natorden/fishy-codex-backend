import { User } from './user.entity';
import { ChatRoom } from './chat-room.entity';

export class Chat {
  uuid: string;
  text: string;
  fishImage?: string;
  chatRoom: ChatRoom;
  user: User;
}
