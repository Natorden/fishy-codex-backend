import { Chat } from './chat.entity';
import { User } from './user.entity';

export class ChatRoom {
  uuid: string;
  name: string;
  chats: Chat[];
  user: User;
}
