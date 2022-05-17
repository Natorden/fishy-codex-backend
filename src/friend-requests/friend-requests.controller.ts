import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { FriendRequest } from '../core/friend-request.entity';
import { FriendRequestsService } from '../domain/friend-requests.service';
import { CreateFriendRequestDto } from './dto/create-friend-request.dto';

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
  findById(@Param('id') userId: string): Promise<FriendRequest[]> {
    return this.friendRequestService.findByReceiverId(userId);
  }
}
