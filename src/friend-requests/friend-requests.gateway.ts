import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { FriendRequestsService } from '../domain/friend-requests.service';
import { CreateFriendRequestDto } from './dto/create-friend-request.dto';
import { Server } from 'socket.io';
import { Inject } from '@nestjs/common';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
@WebSocketGateway()
export class FriendRequestsGateway {
  @WebSocketServer()
  server: Server;

  constructor(
    @Inject('FriendRequestService')
    private readonly friendRequestsService: FriendRequestsService,
  ) {}

  @SubscribeMessage('createFriendRequest')
  create(@MessageBody() createFriendRequestDto: CreateFriendRequestDto) {
    /*
     * Listens to requests ->
     * creates request in the database ->
     * sends the request to the receiver uuid
     */
    const newFriendRequest: CreateFriendRequestDto = {
      senderUserId: createFriendRequestDto.senderUserId,
      receiverUserId: createFriendRequestDto.receiverUserId,
    };

    this.friendRequestsService
      .create(newFriendRequest.senderUserId, newFriendRequest.receiverUserId)
      .then((fr) =>
        this.server.emit(newFriendRequest.receiverUserId, fr.senderUserId),
      );
  }

  @SubscribeMessage('removeFriendRequest')
  remove(@MessageBody() id: number) {
    return;
  }
}
