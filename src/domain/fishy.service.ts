import { Injectable } from '@nestjs/common';
import { IFishRepository } from './interfaces/fishRepository.interface';
import { Fish } from './core/fish.entity';
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
    image: string,
    userUuid: string,
  ): Promise<Fish> {
    return this.fishRepo.create(
      catchName,
      species,
      length,
      weight,
      image,
      userUuid,
    );
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
