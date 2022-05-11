import { EntitySchema } from 'typeorm';
import { Fish } from '../../../core/fish.entity';

export const FishSchema = new EntitySchema<Fish>({
  name: 'Fish',
  target: Fish,
  columns: {
    uuid: {
      type: 'uuid',
      generated: 'uuid',
      primary: true,
    },
    catchName: {
      type: 'varchar',
    },
    species: {
      type: 'varchar',
    },
    length: {
      type: 'double',
    },
    weight: {
      type: 'double',
    },
  },
  relations: {
    user: {
      type: 'many-to-one',
      target: 'User',
      joinColumn: true,
    },
  },
});
