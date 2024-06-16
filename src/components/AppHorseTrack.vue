<script lang="ts" setup>
import { HorseRaceMutation, type Horse } from '@/types'
import HorseIcon from '@/components/HorseIcon.vue'
import { computed, onMounted, ref, toRaw } from 'vue'
import { calculatePercentage } from '@/utils'
import { useStore } from '@/store';

const trackRef = ref<HTMLDivElement | null>(null)
const store = useStore()

const props = defineProps<{
  order: number
  horse: Horse
}>()

onMounted(() => {
  store.commit(HorseRaceMutation.SET_TRACK_LENGTH, trackRef.value?.clientWidth || 0)
})

const emit = defineEmits<{
  (e: 'finished', data: Horse): void
}>()

const calculatedHorsePlacement = computed(() => {
  const calculatedPercentage = calculatePercentage(store.state.race.trackLength, props.horse.move)
  if (calculatedPercentage >= 95) {
    emit('finished', toRaw(props.horse))
  }
  return calculatedPercentage
})
</script>

<template>
  <div
    class="w-full bg-white border-slate-400/75 border-b first-of-type:border-t min-h-16 flex items-stretch border-r-2 border-r-red-500 overflow-x-hidden"
    ref="trackRef"
  >
    <div class="min-w-[5%] bg-slate-400 text-white flex items-center justify-center mr-2">
      <span class="-rotate-90">{{ order }}</span>
    </div>
    <HorseIcon
      :color="horse.color"
      class="self-center relative transition-all"
      :style="{ transform: `translateX(-${calculatedHorsePlacement}%)`, left: `${calculatedHorsePlacement}%` }"
    />
  </div>
</template>
