<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import { useStore } from '@/store';
import AppHorseListInfo from '@/components/AppHorseListInfo.vue';
import { HorseRaceMutation } from '@/types';

const store = useStore();

onMounted(() => {
  store.commit(HorseRaceMutation.SET_HORSES);
  store.commit(HorseRaceMutation.GENERATE_PROGRAM);
});

const horses = computed(() => store.state.race.horses);
</script>

<template>
  <div class="elevated-card col-span-6 xl:col-span-1">
    <div class="text-lg border-b flex justify-between items-center">
      <b class="flex-1">Race Horse List</b>
      <span class="text-sm text-slate-500">Condition</span>
    </div>
    <AppHorseListInfo v-for="(horse, index) in horses" :key="index" :horse="horse" />
  </div>
</template>
