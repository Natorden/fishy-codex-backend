import { FriendRequest } from '../../core/friend-request.entity';

export interface IFriendRequestRepository {
  create(senderUserId: string, receiverUserId: string): Promise<FriendRequest>;

  getSenderById(userId: string): Promise<FriendRequest[]>;

  getReceiverById(userId: string): Promise<FriendRequest[]>;

  getById(id: string): Promise<FriendRequest>;

  delete(requestUuid: string): Promise<any>;
}
