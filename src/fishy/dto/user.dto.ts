import { Fish } from '../../core/fish.entity';
import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty()
  uuid: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  age: number;
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  fish: Fish[];
}
