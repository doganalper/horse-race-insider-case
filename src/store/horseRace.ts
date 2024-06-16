import { HorseRaceMutation, type Horse, LapStatus, type Programs, HorseRaceAction } from '@/types'
import { LAP_INFOS, RUN_COUNT, generateHorseList, generateProgram, getRandomInt } from '@/utils'
import { toRaw } from 'vue'

export interface HorseRaceState {
  horses: Horse[]
  programs: Programs
  currentLap: number
  trackLength: number
  raceStarted: boolean
  results: Programs
}

const MOVE_INTERNAL_IN_MS = 500

export const horseRaceStore = {
  state: {
    horses: [],
    programs: [],
    currentLap: 0,
    lapStatus: LapStatus.PAUSED,
    trackLength: 0,
    results: [],
    raceStarted: false
  } as HorseRaceState,
  mutations: {
    [HorseRaceMutation.SET_HORSES](state: HorseRaceState) {
      const generatedHorses = generateHorseList()
      state.horses = generatedHorses
    },
    [HorseRaceMutation.GENERATE_PROGRAM](state: HorseRaceState) {
      const generatedProgram = generateProgram(state.horses)
      state.programs = generatedProgram
    },
    [HorseRaceMutation.INCREMENT_LAP](state: HorseRaceState) {
      if (state.currentLap !== RUN_COUNT - 1) {
        state.currentLap += 1
      }
    },
    [HorseRaceMutation.SET_TRACK_LENGTH](state: HorseRaceState, trackLength: number) {
      state.trackLength = trackLength
    },
    [HorseRaceMutation.MOVE_HORSES](state: HorseRaceState) {

      if (!state.raceStarted) {
        state.raceStarted = true
      }

      if (state.currentLap !== 0) {
        state.programs[state.currentLap - 1].horses = state.programs[state.currentLap - 1].horses.map(
          (horse) => ({
            ...horse,
            move: 0
          })
        )
      }

      const currentLapInfo = state.programs[state.currentLap]
      const moveMaxValue = (state.trackLength / MOVE_INTERNAL_IN_MS) * 50

      const hasEveryHorseReachedFinish = () => {
        return (
          currentLapInfo.horses.filter((horse) => horse.move >= state.trackLength).length ===
          currentLapInfo.horses.length
        )
      }

      let interval: NodeJS.Timeout | undefined
      interval = setInterval(() => {
        if (hasEveryHorseReachedFinish()) {
          clearInterval(interval)
          interval = undefined
          return
        }

        currentLapInfo.horses = currentLapInfo?.horses?.map((horse) => {
          const hasFinishedAlready = horse.move >= state.trackLength

          if (hasFinishedAlready) {
            return horse
          }

          return {
            ...horse,
            move: horse.move + getRandomInt(5, moveMaxValue)
          }
        })
      }, MOVE_INTERNAL_IN_MS)
    },
    [HorseRaceMutation.APPEND_RESULT](state: HorseRaceState, horse: Horse) {
      const currentLapResultsClone = structuredClone(toRaw(state.results[state.currentLap]))

      if (currentLapResultsClone) {
        if (state.results[state.currentLap].horses.find((h) => h.id === horse.id)) {
          return
        }

        currentLapResultsClone.horses.push(horse)
        state.results[state.currentLap] = currentLapResultsClone
      } else {
        state.results[state.currentLap] = { horses: [horse], lap: LAP_INFOS[state.currentLap] }
      }
    }
  },
  actions: {
    [HorseRaceAction.MOVE_TO_NEXT_LAP]({ commit }: { commit: any }) {
      commit(HorseRaceMutation.INCREMENT_LAP)
      commit(HorseRaceMutation.MOVE_HORSES)
    }
  }
}
