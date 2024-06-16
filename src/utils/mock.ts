import type { Horse } from '@/types';
import { faker } from '@faker-js/faker';

export const HORSE_LIST_LENGTH = 20

export function generateHorseList(): Horse[] {
  const colorsSet = new Set<string>();

  while (colorsSet.size < HORSE_LIST_LENGTH) {
    colorsSet.add(faker.color.rgb())
  }

  const colorsArr = Array.from(colorsSet)

  return Array.from({ length: HORSE_LIST_LENGTH }, (_, idx) => ({
    color: colorsArr[idx],
    id: faker.string.alphanumeric({
      length: 20,
    }),
    name: faker.person.fullName(),
    condition: faker.number.int({
      min: 1,
      max: 100
    }),
    move: 0
  }));
}
