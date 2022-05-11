import { Module } from '@nestjs/common';
import { FishyService } from '../domain/fishy.service';
import { FishyController } from './fishy.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FishSchema } from '../infrastructure/typeORM/schemas/fish.schema';
import { FishRepositoryAdapter } from '../infrastructure/typeORM/adapters/fishRepository.adapter';
import { IFishRepository } from '../domain/borders/fishRepository.interface';

@Module({
  imports: [TypeOrmModule.forFeature([FishSchema])],
  controllers: [FishyController],
  providers: [
    {
      provide: 'FishRepository',
      useClass: FishRepositoryAdapter,
    },
    {
      inject: ['FishRepository'],
      provide: 'FishyService',
      useFactory: (fishRepository: IFishRepository) =>
        new FishyService(fishRepository),
    },
  ],
  exports: ['FishyService'],
})
export class FishyModule {}
