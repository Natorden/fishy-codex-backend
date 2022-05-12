import { Fish } from '../../core/fish.entity';
import { DeleteResult } from 'typeorm';

export interface IFishRepository {
  create(
    catchName: string,
    species: string,
    length: number,
    weight: number,
  ): Promise<Fish>;

  getAllFish(): Promise<Fish[]>;

  getFishById(id: string): Promise<Fish>;

  updateFish(
    id: string,
    catchName: string,
    species: string,
    length: number,
    weight: number,
  ): Promise<Fish>;

  removeFish(id: string);
}
