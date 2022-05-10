import { Module } from '@nestjs/common';
import { FishyService } from '../domain/fishy.service';
import { FishyController } from './fishy.controller';

@Module({
  controllers: [FishyController],
  providers: [FishyService],
})
export class FishyModule {}
