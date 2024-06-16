<script lang="ts" setup>
import { useStore } from '@/store'
import AppHorseTrack from '@/components/AppHorseTrack.vue'
import { computed, watch } from 'vue'
import { HORSE_RUN_COUNT, LAP_INFOS } from '@/utils'
import { HorseRaceAction, HorseRaceMutation, type Horse } from '@/types'

const store = useStore()

const currentLap = computed(() => {
  return store.state.race.currentLap
})

const currentRunHorses = computed(() => {
  return store.state.race.programs[currentLap.value]?.horses || []
})

function horseFinishedHandler(finishedHorse: Horse) {
  store.commit(HorseRaceMutation.APPEND_RESULT, finishedHorse)
}

const currentLapResults = computed(() => {
  return store.state.race.results[currentLap.value]?.horses || []
})

watch(
  currentLapResults,
  () => {
    if (currentLapResults.value.length === HORSE_RUN_COUNT) {
      store.dispatch(HorseRaceAction.MOVE_TO_NEXT_LAP)
    }
  },
  { immediate: false }
)
</script>

<template>
  <div class="col-span-6 xl:col-span-3 xl:sticky xl:top-5" v-if="currentRunHorses.length > 0">
    <AppHorseTrack
      v-for="(horse, index) in currentRunHorses"
      :key="index"
      :horse="horse"
      :order="index + 1"
      @finished="horseFinishedHandler"
    />
    <div class="flex justify-between items-center px-1 pt-2">
      <span class="font-semibold">{{ LAP_INFOS[currentLap] }}</span>
      <span class="text-right text-red-500"> Finish Line </span>
    </div>
  </div>
</template>
