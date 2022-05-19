import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ChatRoomsService } from '../domain/chat-rooms.service';
import { CreateChatRoomDto } from './dto/create-chat-room.dto';

@Controller('chat-rooms')
export class ChatRoomsController {
  constructor(private readonly chatRoomsService: ChatRoomsService) {}

  @Post()
  create(@Body() createChatRoomDto: CreateChatRoomDto) {
    return this.chatRoomsService.create(createChatRoomDto);
  }

  @Get('user/:uuid')
  findAll(@Param('uuid') uuid: string) {
    return this.chatRoomsService.findAll(uuid);
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.chatRoomsService.findOne(uuid);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chatRoomsService.remove(id);
  }
}
