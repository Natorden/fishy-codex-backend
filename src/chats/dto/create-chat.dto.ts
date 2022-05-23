import { IsNotEmpty } from 'class-validator';

export class CreateChatDto {
  userUUID: string;
  @IsNotEmpty()
  text: string;
  chatRoom: string;
}
