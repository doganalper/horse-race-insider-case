import type { Horse, Programs } from "@/types";
import { toRaw } from "vue";
import { shuffleArray } from "@/utils";

const LAP_TITLES = [
  "Lap No:1 (1200m)",
  "Lap No:2 (1400m)",
  "Lap No:3 (1600m)",
  "Lap No:4 (1800m)",
  "Lap No:5 (2000m)",
  "Lap No:6 (2200m)",
]

const RUN_COUNT = 6;
const HORSE_RUN_COUNT = 10;

export function generateProgram(horses: Horse[]): Programs {
  const runs = Array.from({ length: RUN_COUNT })

  return runs.map((_, idx) => {
    const clonedHorses = structuredClone(toRaw(horses));
    const randomizedHorses = shuffleArray(clonedHorses);

    return {
      horses: randomizedHorses.slice(0, HORSE_RUN_COUNT),
      title: LAP_TITLES[idx]
    }
  })
}
