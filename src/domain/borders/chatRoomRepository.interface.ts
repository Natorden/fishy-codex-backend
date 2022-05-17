import { ChatRoom } from '../../core/chat-room.entity';

export interface IChatRoomRepository {
  create(name: string, userUUID: string): Promise<ChatRoom>;

  getAll(userUuid: string): Promise<ChatRoom[]>;

  getWithUuid(uuid: string): Promise<ChatRoom>;
}
