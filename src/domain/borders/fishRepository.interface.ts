import { Fish } from '../../core/fish.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UpdateFishyDto } from '../../fishy/dto/update-fishy.dto';

export interface IFishRepository {
  create(
    catchName: string,
    species: string,
    length: number,
    weight: number,
  ): Promise<Fish>;

  getAllFish(): Promise<Fish[]>;

  getFishById(id: number): Promise<Fish>;

  removeFish(id: number): Promise<DeleteResult>;

  updateFish(id: number, updateFishyDto: UpdateFishyDto): Promise<Fish>;
}
