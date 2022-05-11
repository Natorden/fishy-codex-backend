import { Injectable } from '@nestjs/common';
import { UpdateFishyDto } from '../fishy/dto/update-fishy.dto';
import { IFishRepository } from './borders/fishRepository.interface';
import { Fish } from '../core/fish.entity';
import { DeleteResult, UpdateResult } from 'typeorm';

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
  ): Promise<Fish> {
    return this.fishRepo.create(catchName, species, length, weight);
  }

  findAll(): Promise<Fish[]> {
    return this.fishRepo.getAllFish();
  }

  findOne(id: number): Promise<Fish> {
    return this.fishRepo.getFishById(id);
  }

  update(id: number, updateFishyDto: UpdateFishyDto): Promise<UpdateResult> {
    return this.fishRepo.updateFish(id,updateFishyDto);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.fishRepo.removeFish(id);
  }
}
