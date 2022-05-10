import { PartialType } from '@nestjs/swagger';
import { CreateFishyDto } from './create-fishy.dto';

export class UpdateFishyDto extends PartialType(CreateFishyDto) {}
