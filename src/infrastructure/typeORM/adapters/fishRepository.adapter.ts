import { IFishRepository } from '../../../domain/borders/fishRepository.interface';
import { EntityManager, Repository, DeleteResult } from 'typeorm';
import { Fish } from '../../../core/fish.entity';
import { FishSchema } from '../schemas/fish.schema';
import { Injectable } from '@nestjs/common';

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
  ): Promise<Fish> {
    return this.fishRepo.save({
      catchName: catchName,
      species: species,
      length: length,
      weight: weight,
    });
  }

  getAllFish(): Promise<Fish[]> {
    return this.fishRepo.find();
  }

  getFishById(id: number): Promise<Fish> {
    return this.fishRepo.findOne({ where: { uuid: id } });
  }

  removeFish(id: number): Promise<DeleteResult> {
    return this.fishRepo.delete(id);
  }
}
