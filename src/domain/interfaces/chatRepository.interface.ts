import { CreateChatDto } from '../../chats/dto/create-chat.dto';
import { Chat } from '../core/chat.entity';

export interface IChatRepository {
  getAll(): Promise<Chat[]>;

  create(createChatDto: CreateChatDto): Promise<Chat>;
}
