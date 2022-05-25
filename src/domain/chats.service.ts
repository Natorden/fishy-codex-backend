import { Inject, Injectable } from '@nestjs/common';
import { CreateChatDto } from '../chats/dto/create-chat.dto';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { IChatRepository } from './interfaces/chatRepository.interface';

@Injectable()
export class ChatsService {
  private chatRepo: IChatRepository;

  constructor(@Inject('ChatRepository') chatRepository: IChatRepository) {
    this.chatRepo = chatRepository;
  }

  create(createChatDto: CreateChatDto) {
    return this.chatRepo.create(createChatDto);
  }

  private typingUsers: BehaviorSubject<{ username: string; timeoutId: any }[]> =
    new BehaviorSubject([]);

  public get typingUsers$(): Observable<string[]> {
    return this.typingUsers.pipe(map((users) => users.map((u) => u.username)));
  }

  handleUserTyping(username: string) {
    const existingUser = this.typingUsers.value.find(
      (u) => u.username === username,
    );
    const timeoutId = setTimeout(
      () =>
        this.typingUsers.next(
          this.typingUsers.value.filter((u) => u.username !== username),
        ),
      2000,
    );
    if (!existingUser) {
      this.typingUsers.next([
        ...this.typingUsers.value,
        { username, timeoutId },
      ]);
    } else {
      clearTimeout(existingUser.timeoutId);
      existingUser.timeoutId = timeoutId;
    }
  }
}
