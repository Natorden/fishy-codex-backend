import { Inject, Injectable } from '@nestjs/common';
import { CreateChatRoomDto } from '../chat-rooms/dto/create-chat-room.dto';
import { IChatRoomRepository } from './borders/chatRoomRepository.interface';

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
      createChatRoomDto.userUUID,
    );
  }

  findAll(userUuid: string) {
    return this.chatRoomRepo.getAll(userUuid);
  }

  findOne(uuid: string) {
    return this.chatRoomRepo.getWithUuid(uuid);
  }
}
