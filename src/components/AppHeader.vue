<script lang="ts" setup>
import AppButton from '@/components/AppButton.vue'
import { useStore } from '@/store'
import { HorseRaceMutation } from '@/types'
import { computed } from 'vue'

const store = useStore()

const isRaceStarted = computed(() => store.state.race.raceStarted)
</script>

<template>
  <div class="app-container border-b flex justify-between items-center">
    <span class="font-semibold">Racing App</span>
    <div class="flex gap-4">
      <AppButton
        data-testid="generate-program-button"
        text="Generate Program"
        @click="store.commit(HorseRaceMutation.GENERATE_PROGRAM)"
        :disabled="isRaceStarted"
      />
      <AppButton
        data-testid="start-race-button"
        text="Start Race"
        @click="store.commit(HorseRaceMutation.MOVE_HORSES)"
        :disabled="isRaceStarted"
      />
    </div>
  </div>
</template>
