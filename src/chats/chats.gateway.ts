import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';
import { ChatsService } from '../domain/chats.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatsGateway {
  @WebSocketServer()
  server: Server;
  doOnce = false;

  constructor(private readonly chatsService: ChatsService) {
    this.chatsService.typingUsers$.subscribe((data) => {
      if (this.doOnce) this.server.emit('getIsTyping', data);
      else this.doOnce = true;
    });
  }

  @SubscribeMessage('createChat')
  create(@MessageBody() createChatDto: CreateChatDto) {
    this.chatsService
      .create(createChatDto)
      .then((newChat) => this.server.emit(createChatDto.chatRoom, newChat));
  }

  @SubscribeMessage('isTyping')
  async onTypingStart(
    @MessageBody() message: any,
    @ConnectedSocket() socket: Socket,
  ) {
    this.chatsService.handleUserTyping(message.user);
  }
}
