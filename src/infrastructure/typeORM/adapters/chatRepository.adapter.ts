import { IChatRepository } from '../../../domain/interfaces/chatRepository.interface';
import { Chat } from '../../../domain/core/chat.entity';
import { CreateChatDto } from '../../../chats/dto/create-chat.dto';
import { EntityManager, Repository } from 'typeorm';
import { User } from '../../../domain/core/user.entity';
import { ChatSchema } from '../schemas/chat.schema';
import { UserSchema } from '../schemas/user.schema';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatRepositoryAdapter implements IChatRepository {
  private chatRepo: Repository<Chat>;
  private userRepo: Repository<User>;

  constructor(private readonly em: EntityManager) {
    this.chatRepo = em.getRepository(ChatSchema);
    this.userRepo = em.getRepository(UserSchema);
  }

  create(createChatDto: CreateChatDto): Promise<Chat> {
    return this.userRepo.findOne(createChatDto.userUUID).then((user) => {
      return this.chatRepo.save({
        text: createChatDto.text,
        fishImage: createChatDto.fishImage,
        chatRoom: { uuid: createChatDto.chatRoom },
        user: user,
      });
    });
  }
  getAll(): Promise<Chat[]> {
    return this.chatRepo.find();
  }
}
