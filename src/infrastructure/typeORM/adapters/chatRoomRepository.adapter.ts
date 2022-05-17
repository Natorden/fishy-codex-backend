import { IChatRoomRepository } from '../../../domain/borders/chatRoomRepository.interface';
import { EntityManager, Repository } from 'typeorm';
import { ChatRoom } from '../../../core/chat-room.entity';
import { Friend } from '../../../core/friend.entity';
import { ChatRoomSchema } from '../schemas/chatRoom.schema';
import { FriendSchema } from '../schemas/friend.schema';

export class chatRoomRepositoryAdapter implements IChatRoomRepository {
  private chatRoomRepo: Repository<ChatRoom>;
  private friendRepo: Repository<Friend>;

  constructor(private readonly em: EntityManager) {
    this.chatRoomRepo = em.getRepository(ChatRoomSchema);
    this.friendRepo = em.getRepository(FriendSchema);
  }

  create(name: string, userUUID: string): Promise<ChatRoom> {
    return this.chatRoomRepo.save({
      name: name,
      user: { uuid: userUUID },
    });
  }

  getAll(userUuid: string): Promise<ChatRoom[]> {
    return this.friendRepo
      .find({
        where: [{ userOneId: userUuid }, { userTwoId: userUuid }],
      })
      .then((friends) => {
        const whereArr = [];
        whereArr.push({ user: { uuid: userUuid } });
        for (const friend of friends) {
          if (friend.userOneId == userUuid) {
            whereArr.push({ user: { uuid: friend.userTwoId } });
          } else {
            whereArr.push({ user: { uuid: friend.userOneId } });
          }
        }

        return this.chatRoomRepo.find({
          where: whereArr,
        });
      });
  }

  getWithUuid(uuid: string): Promise<ChatRoom> {
    return this.chatRoomRepo.findOne(uuid, {
      relations: ['chats', 'chats.user'],
    });
  }
}
