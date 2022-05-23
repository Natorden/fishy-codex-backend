import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(32)
  @ApiProperty()
  name: string;
  @IsNumber()
  @IsNotEmpty()
  @Min(13)
  @Max(99)
  @ApiProperty()
  age: number;
  @IsString()
  @IsEmail()
  @ApiProperty()
  email: string;
  @MinLength(8)
  @MaxLength(128)
  @ApiProperty()
  password: string;
  @ApiProperty()
  @IsUrl()
  avatar: string;
}
