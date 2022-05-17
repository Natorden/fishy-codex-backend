import { ApiProperty } from '@nestjs/swagger';

export class CreateFriendRequestDto {
  @ApiProperty()
  senderUserId: string;
  @ApiProperty()
  receiverUserId: string;
}
