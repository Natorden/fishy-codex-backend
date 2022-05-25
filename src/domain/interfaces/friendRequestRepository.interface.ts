import { FriendRequest } from '../core/friend-request.entity';
import { FriendRequestTransfer } from '../core/friend-request-transfer';

export interface IFriendRequestRepository {
  create(senderUserId: string, receiverUserId: string): Promise<FriendRequest>;

  getSenderById(userId: string): Promise<FriendRequest[]>;

  getReceiverById(userId: string): Promise<FriendRequestTransfer[]>;

  getById(id: string): Promise<FriendRequest>;

  delete(requestUuid: string): Promise<any>;
}
