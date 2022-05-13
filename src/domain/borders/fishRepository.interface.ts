import { Fish } from '../../core/fish.entity';
import { User } from '../../core/user.entity';

export interface IFishRepository {
  create(
    catchName: string,
    species: string,
    length: number,
    weight: number,
    userUuid: string,
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
