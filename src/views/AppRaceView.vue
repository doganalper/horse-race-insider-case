<script lang="ts" setup>
import AppHorseList from '@/components/AppHorseList.vue';
import AppHorsePrograms from '@/components/AppHorsePrograms.vue';
import AppHorseTracks from '@/components/AppHorseTracks.vue';
</script>

<template>
  <div class="app-container grid grid-cols-1 xl:grid-cols-6 gap-3 h-full items-start">
    <AppHorseList />
    <AppHorseTracks />
    <AppHorsePrograms />
  </div>
</template>
