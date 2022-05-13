import { ApiProperty } from '@nestjs/swagger';

export class UpdateFishyDto {
  @ApiProperty()
  catchName: string;
  @ApiProperty()
  species: string;
  @ApiProperty()
  length: number;
  @ApiProperty()
  weight: number;
}
