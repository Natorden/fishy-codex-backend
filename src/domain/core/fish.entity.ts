import { User } from './user.entity';

export class Fish {
  uuid: string;
  catchName: string;
  species: string;
  length: number;
  weight: number;
  image: string;
  user: User;
}
