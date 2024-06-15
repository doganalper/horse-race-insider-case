import type { Horse, Programs } from '@/types'
import { generateHorseList, generateProgram } from '@/utils'

export interface HorseRaceState {
  horses: Horse[]
  programs: Programs
}

export enum HorseRaceMutation {
  SET_HORSES = "SET_HORSES",
  GENERATE_PROGRAM = "GENERATE_PROGRAM"
}

export const horseRaceStore = {
  state: {
    horses: [],
    programs: []
  } as HorseRaceState,
  mutations: {
    [HorseRaceMutation.SET_HORSES](state: HorseRaceState) {
      const generatedHorses = generateHorseList()
      state.horses = generatedHorses
    },
    [HorseRaceMutation.GENERATE_PROGRAM](state: HorseRaceState) {
      const generatedProgram = generateProgram(state.horses)
      state.programs = generatedProgram
    }
  }
}
