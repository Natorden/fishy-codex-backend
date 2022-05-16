import { Fish } from '../../core/fish.entity';
import { UpdateFishyDto } from '../../fishy/dto/update-fishy.dto';

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

  updateFish(id: string, updateFishyDto: UpdateFishyDto): Promise<Fish>;

  removeFish(id: string);
}
