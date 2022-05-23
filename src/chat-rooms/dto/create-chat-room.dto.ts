import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateChatRoomDto {
  @MinLength(3)
  @MaxLength(32)
  @IsString()
  @ApiProperty()
  name: string;
  @ApiProperty()
  userUuid: string;
}
