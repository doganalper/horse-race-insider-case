<script lang="ts" setup>
import AppButton from '@/components/AppButton.vue'
import { useStore } from '@/store';
import { HorseRaceMutation } from '@/store/horseRace';

const store = useStore();
</script>

<template>
  <div class="app-container border-b flex justify-between items-center">
    <span class="font-semibold">Racing App</span>
    <div class="flex gap-4">
      <AppButton text="Generate Program" @click="store.commit(HorseRaceMutation.GENERATE_PROGRAM)"/>
      <AppButton text="Start/Pause" />
    </div>
  </div>
</template>
