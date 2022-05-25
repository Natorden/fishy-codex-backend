import { Friend } from '../core/friend.entity';

export interface IFriendRepository {
  getFriendsByUserid(uuid: string): Promise<Friend[]>;

  delete(id: string): Promise<any>;

  create(userOneId: string, userTwoId: string): Promise<Friend>;

  getAll(): Promise<Friend[]>;
}
