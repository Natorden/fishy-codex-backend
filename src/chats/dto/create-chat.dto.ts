import { IsNotEmpty } from 'class-validator';

export class CreateChatDto {
  userUUID: string;
  @IsNotEmpty()
  text: string;
  fishImage?: string;
  chatRoom: string;
}
