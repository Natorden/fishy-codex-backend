import { IFriendRequestRepository } from '../../../domain/borders/friendRequestRepository.interface';
import { FriendRequest } from '../../../core/friend-request.entity';
import { EntityManager, Repository } from 'typeorm';
import { FriendRequestSchema } from '../schemas/friendRequest.schema';
import { Injectable } from '@nestjs/common';
import { User } from '../../../core/user.entity';
import { UserSchema } from '../schemas/user.schema';
import { FriendRequestTransfer } from '../../../core/friend-request-transfer';

@Injectable()
export class FriendRequestRepositoryAdapter
  implements IFriendRequestRepository
{
  private friendRequestRepo: Repository<FriendRequest>;
  private readonly userRepo: Repository<User>;

  constructor(private readonly em: EntityManager) {
    this.friendRequestRepo = em.getRepository(FriendRequestSchema);
    this.userRepo = em.getRepository(UserSchema);
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

  async getReceiverById(
    receiverUserId: string,
  ): Promise<FriendRequestTransfer[]> {
    const friendRequestTransferList = [] as FriendRequestTransfer[];
    const newList = await this.friendRequestRepo.find({
      where: { receiverUserId: receiverUserId },
    });
    for (let i = 0; i < newList.length; i++) {
      const reciever = await this.userRepo.findOne({
        where: { uuid: newList[i].receiverUserId },
      });
      const sender = await this.userRepo.findOne({
        where: { uuid: newList[i].senderUserId },
      });
      friendRequestTransferList.push({
        uuid: newList[i].uuid,
        receiverUserId: newList[i].receiverUserId,
        receiverName: reciever.name,
        senderUserId: newList[i].senderUserId,
        senderName: sender.name,
      });
    }

    return friendRequestTransferList;
  }

  getSenderById(senderUserId: string): Promise<FriendRequest[]> {
    return this.friendRequestRepo.find({
      where: { senderUserId: senderUserId },
    });
  }

  delete(requestUuid: string): Promise<any> {
    return this.friendRequestRepo.delete(requestUuid);
  }
}
