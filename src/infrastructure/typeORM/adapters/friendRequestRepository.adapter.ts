import { IFriendRequestRepository } from '../../../domain/borders/friendRequestRepository.interface';
import { FriendRequest } from '../../../core/friend-request.entity';
import { EntityManager, Repository } from 'typeorm';
import { FriendRequestSchema } from '../schemas/friendRequest.schema';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FriendRequestRepositoryAdapter
  implements IFriendRequestRepository
{
  private friendRequestRepo: Repository<FriendRequest>;

  constructor(private readonly em: EntityManager) {
    this.friendRequestRepo = em.getRepository(FriendRequestSchema);
  }

  create(senderUserId: string, receiverUserId: string): Promise<FriendRequest> {
    return this.friendRequestRepo.save({
      senderUserId: senderUserId,
      receiverUserId: receiverUserId,
    });
  }

  getById(id: string): Promise<FriendRequest> {
    return this.friendRequestRepo.findOne({ where: { uuid: id } });
  }

  getReceiverById(receiverUserId: string): Promise<FriendRequest[]> {
    return this.friendRequestRepo.find({
      where: { receiverUserId: receiverUserId },
    });
  }

  getSenderById(senderUserId: string): Promise<FriendRequest[]> {
    return this.friendRequestRepo.find({
      where: { senderUserId: senderUserId },
    });
  }

  delete(requestUuid: string): Promise<any> {
    return this.friendRequestRepo.delete({ uuid: requestUuid });
  }
}
