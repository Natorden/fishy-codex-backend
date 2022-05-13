import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  age: number;
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
}
