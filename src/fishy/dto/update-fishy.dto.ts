import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsString,
  IsUrl,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class UpdateFishyDto {
  @IsString()
  @MinLength(3)
  @MaxLength(32)
  @ApiProperty()
  catchName: string;
  @IsString()
  @MinLength(3)
  @MaxLength(32)
  @ApiProperty()
  species: string;
  @Min(10)
  @IsNumber()
  @ApiProperty()
  length: number;
  @Min(10)
  @IsNumber()
  @ApiProperty()
  weight: number;
  @IsUrl()
  @ApiProperty()
  image: string;
}
