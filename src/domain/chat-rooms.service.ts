import { Inject, Injectable } from '@nestjs/common';
import { CreateChatRoomDto } from '../chat-rooms/dto/create-chat-room.dto';
import { IChatRoomRepository } from './interfaces/chatRoomRepository.interface';

@Injectable()
export class ChatRoomsService {
  private chatRoomRepo: IChatRoomRepository;

  constructor(
    @Inject('ChatRoomRepository') chatRoomRepository: IChatRoomRepository,
  ) {
    this.chatRoomRepo = chatRoomRepository;
  }

  create(createChatRoomDto: CreateChatRoomDto) {
    return this.chatRoomRepo.create(
      createChatRoomDto.name,
      createChatRoomDto.userUuid,
    );
  }

  findAll(userUuid: string) {
    return this.chatRoomRepo.getAll(userUuid);
  }

  findOne(uuid: string) {
    return this.chatRoomRepo.getWithUuid(uuid);
  }

  remove(id: string) {
    return this.chatRoomRepo.deleteChatRoom(id);
  }
}
