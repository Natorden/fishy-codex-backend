import { Injectable } from '@nestjs/common';
import { CreateFriendDto } from '../friends/dto/create-friend.dto';
import { Friend } from './core/friend.entity';
import { IFriendRepository } from './interfaces/friendRepository.interface';

@Injectable()
export class FriendsService {
  private friendRepo: IFriendRepository;

  constructor(friendRepository: IFriendRepository) {
    this.friendRepo = friendRepository;
  }

  create(createFriendDto: CreateFriendDto) {
    return this.friendRepo.create(
      createFriendDto.userOneId,
      createFriendDto.userTwoId,
    );
  }

  findAll() {
    return this.friendRepo.getAll();
  }

  findByUserId(uuid: string): Promise<Friend[]> {
    return this.friendRepo.getFriendsByUserid(uuid);
  }

  remove(friendEntityId: string) {
    return this.friendRepo.delete(friendEntityId);
  }
}
