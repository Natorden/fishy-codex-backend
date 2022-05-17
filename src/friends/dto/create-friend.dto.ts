import { ApiProperty } from '@nestjs/swagger';

export class CreateFriendDto {
  @ApiProperty()
  userOneId: string;
  @ApiProperty()
  userTwoId: string;
}
