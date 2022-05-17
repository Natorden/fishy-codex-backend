import { IFriendRepository } from '../../../domain/borders/friendRepository.interface';
import { EntityManager, Repository } from 'typeorm';
import { Friend } from '../../../core/friend.entity';
import { User } from '../../../core/user.entity';
import { FriendSchema } from '../schemas/friend.schema';
import { UserSchema } from '../schemas/user.schema';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FriendRepositoryAdapter implements IFriendRepository {
  private friendRepo: Repository<Friend>;
  private userRepo: Repository<User>;

  constructor(private readonly em: EntityManager) {
    this.friendRepo = em.getRepository(FriendSchema);
    this.userRepo = em.getRepository(UserSchema);
  }

  create(userOneId: string, userTwoId: string): Promise<Friend> {
    return this.friendRepo.save({
      userOneId: userOneId,
      userTwoId: userTwoId,
    });
  }

  delete(id: string): Promise<any> {
    return this.friendRepo.delete({ uuid: id });
  }

  getAll(): Promise<Friend[]> {
    return this.friendRepo.find();
  }

  getFriendsByUserid(userId: string): Promise<Friend[]> {
    // Select friend where the first or second user id is equal to userId
    return this.friendRepo.find({
      where: [{ userOneId: userId }, { userTwoId: userId }],
    });
  }
}