import { Injectable } from '@nestjs/common';
import { IFishRepository } from './borders/fishRepository.interface';
import { Fish } from '../core/fish.entity';
import { User } from '../core/user.entity';

@Injectable()
export class FishyService {
  private readonly fishRepo: IFishRepository;

  constructor(fishRepository: IFishRepository) {
    this.fishRepo = fishRepository;
  }

  create(
    catchName: string,
    species: string,
    length: number,
    weight: number,
    userUuid: string,
  ): Promise<Fish> {
    return this.fishRepo.create(catchName, species, length, weight, userUuid);
  }

  findAll(): Promise<Fish[]> {
    return this.fishRepo.getAllFish();
  }

  findOne(id: string): Promise<Fish> {
    return this.fishRepo.getFishById(id);
  }

  update(
    id: string,
    catchName: string,
    species: string,
    length: number,
    weight: number,
  ): Promise<Fish> {
    return this.fishRepo.updateFish(id, catchName, species, length, weight);
  }

  remove(id: string) {
    return this.fishRepo.removeFish(id);
  }
}
