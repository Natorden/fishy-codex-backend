import { Fish } from './fish.entity';

export class User {
  uuid: string;
  name: string;
  age: number;
  email: string;
  password: string;
  fish: Fish[];
}
