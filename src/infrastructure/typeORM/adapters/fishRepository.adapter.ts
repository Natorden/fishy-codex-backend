import { IFishRepository } from '../../../domain/borders/fishRepository.interface';
import { EntityManager, Repository } from 'typeorm';
import { Fish } from '../../../core/fish.entity';
import { FishSchema } from '../schemas/fish.schema';
import { Injectable } from '@nestjs/common';
import { User } from '../../../core/user.entity';

@Injectable()
export class FishRepositoryAdapter implements IFishRepository {
  private readonly fishRepo: Repository<Fish>;

  constructor(private readonly em: EntityManager) {
    this.fishRepo = em.getRepository(FishSchema);
  }

  create(
    catchName: string,
    species: string,
    length: number,
    weight: number,
    userUuid: string,
  ): Promise<Fish> {
    return this.fishRepo.save({
      catchName: catchName,
      species: species,
      length: length,
      weight: weight,
      user: { uuid: userUuid },
    });
  }

  getAllFish(): Promise<Fish[]> {
    return this.fishRepo.find({ relations: ['user'] });
  }

  getFishById(id: string): Promise<Fish> {
    return this.fishRepo.findOne({ where: { uuid: id }, relations: ['user'] });
  }

  async updateFish(
    id: string,
    catchName: string,
    species: string,
    length: number,
    weight: number,
  ): Promise<Fish> {
    const updatedFish = await this.getFishById(id);
    updatedFish.catchName = catchName;
    updatedFish.species = species;
    updatedFish.length = length;
    updatedFish.weight = weight;
    return this.fishRepo.save(updatedFish);
  }

  async removeFish(id: string) {
    await this.fishRepo.delete(id);
  }
}
