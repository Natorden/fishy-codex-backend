import { Fish } from './fish.entity';
import { ChatRoom } from './chat-room.entity';
import { Chat } from './chat.entity';

export class User {
  uuid: string;
  name: string;
  age: number;
  email: string;
  password: string;
  fish: Fish[];
  chats: Chat[];
  chatRooms: ChatRoom[];
}
