import { Store, createStore, useStore as baseUseStore } from 'vuex'
import { horseRaceStore, type HorseRaceState } from '@/store/horseRace'
import type { InjectionKey } from 'vue'

interface GlobalState {
  race: HorseRaceState
}

export const globalStateKey: InjectionKey<Store<GlobalState>> = Symbol()

export default createStore<GlobalState>({
  modules: {
    race: horseRaceStore
  }
})

export function useStore() {
  return baseUseStore(globalStateKey)
}
