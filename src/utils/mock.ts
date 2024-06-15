import type { Horse } from '@/types';
import { faker } from '@faker-js/faker';

const HORSE_LIST_LENGTH = 20

export function generateHorseList(): Horse[] {
  return Array.from({ length: HORSE_LIST_LENGTH }, () => ({
    color: faker.color.rgb(),
    id: faker.string.alphanumeric({
      length: 20,
    }),
    name: faker.person.fullName(),
    condition: faker.number.int({
      min: 1,
      max: 100
    }),
  }));
}
