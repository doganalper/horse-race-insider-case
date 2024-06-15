<script lang="ts" setup>
import { useStore } from '@/store'
import AppProgramTable from '@/components/AppProgramTable.vue'
import { computed } from 'vue'

const store = useStore()

const programs = computed(() => store.state.race.programs)
</script>

<template>
  <div class="col-span-6 xl:col-span-2 grid grid-cols-2">
    <div class="flex flex-col gap-2">
      <h2 class="text-center font-bold">Race Program</h2>
      <AppProgramTable v-for="(program, index) in programs" :key="index" :title="program.title" :items="program" />
    </div>
  </div>
</template>
