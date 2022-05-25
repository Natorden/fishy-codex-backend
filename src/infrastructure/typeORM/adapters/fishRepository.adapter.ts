import { IFishRepository } from '../../../domain/interfaces/fishRepository.interface';
import { EntityManager, Repository } from 'typeorm';
import { Fish } from '../../../domain/core/fish.entity';
import { FishSchema } from '../schemas/fish.schema';
import { Injectable } from '@nestjs/common';
import { UpdateFishyDto } from '../../../fishy/dto/update-fishy.dto';

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
    image: string,
    userUuid: string,
  ): Promise<Fish> {
    console.log(catchName, species, length, weight, userUuid, image);
    return this.fishRepo.save({
      catchName: catchName,
      species: species,
      length: length,
      weight: weight,
      image: image,
      user: { uuid: userUuid },
    });
  }

  getAllFish(): Promise<Fish[]> {
    return this.fishRepo.find({ relations: ['user'] });
  }

  getFishById(id: string): Promise<Fish> {
    return this.fishRepo.findOne({ where: { uuid: id }, relations: ['user'] });
  }

  async updateFish(id: string, updateFishyDto: UpdateFishyDto): Promise<Fish> {
    const updatedFish = await this.getFishById(id);
    updatedFish.catchName = updateFishyDto.catchName;
    updatedFish.species = updateFishyDto.species;
    updatedFish.length = updateFishyDto.length;
    updatedFish.weight = updateFishyDto.weight;
    updatedFish.image = updateFishyDto.image;
    return this.fishRepo.save(updatedFish);
  }

  async removeFish(id: string): Promise<any> {
    return await this.fishRepo.delete(id);
  }
}
