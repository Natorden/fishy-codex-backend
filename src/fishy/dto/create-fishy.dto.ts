import { ApiProperty } from '@nestjs/swagger';

export class CreateFishyDto {
  @ApiProperty()
  catchName: string;
  @ApiProperty()
  species: string;
  @ApiProperty()
  length: number;
  @ApiProperty()
  weight: number;
}
