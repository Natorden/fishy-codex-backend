import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import { FriendRequest } from '../core/friend-request.entity';
import { FriendRequestsService } from '../domain/friend-requests.service';
import { CreateFriendRequestDto } from './dto/create-friend-request.dto';
import { FriendRequestTransfer } from '../core/friend-request-transfer';

@Controller('friend-requests')
export class FriendRequestsController {
  constructor(
    @Inject('FriendRequestService')
    private readonly friendRequestService: FriendRequestsService,
  ) {}

  @Post()
  create(@Body() createFriendRequestDro: CreateFriendRequestDto) {
    return this.friendRequestService.create(
      createFriendRequestDro.senderUserId,
      createFriendRequestDro.receiverUserId,
    );
  }

  @Get(':id')
  findById(@Param('id') userId: string): Promise<FriendRequestTransfer[]> {
    return this.friendRequestService.findByReceiverId(userId);
  }
  @Delete('/:id')
  deleteRequest(@Param('id') requestUuid: string): Promise<any> {
    return this.friendRequestService.delete(requestUuid);
  }
}
