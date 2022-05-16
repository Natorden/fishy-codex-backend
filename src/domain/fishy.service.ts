import { Injectable } from '@nestjs/common';
import { IFishRepository } from './borders/fishRepository.interface';
import { Fish } from '../core/fish.entity';
import { UpdateFishyDto } from '../fishy/dto/update-fishy.dto';

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

  update(id: string, updateFishyDto: UpdateFishyDto): Promise<Fish> {
    return this.fishRepo.updateFish(id, updateFishyDto);
  }

  remove(id: string): Promise<any> {
    return this.fishRepo.removeFish(id);
  }
}
