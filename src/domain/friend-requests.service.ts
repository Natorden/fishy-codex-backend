import { Injectable } from '@nestjs/common';
import { IFriendRequestRepository } from './borders/friendRequestRepository.interface';
import { FriendRequest } from '../core/friend-request.entity';

@Injectable()
export class FriendRequestsService {
  private friendRequestRepo: IFriendRequestRepository;

  constructor(friendRequestRepo: IFriendRequestRepository) {
    this.friendRequestRepo = friendRequestRepo;
  }

  create(senderUserId: string, receiverUserId: string): Promise<FriendRequest> {
    console.log(senderUserId, receiverUserId);
    return this.friendRequestRepo.create(senderUserId, receiverUserId);
  }

  findBySenderId(userId: string): Promise<FriendRequest[]> {
    return this.friendRequestRepo.getSenderById(userId);
  }

  findByReceiverId(userId: string): Promise<FriendRequest[]> {
    return this.friendRequestRepo.getReceiverById(userId);
  }
  delete(requestUuid: string): Promise<any> {
    return this.friendRequestRepo.delete(requestUuid);
  }
}
