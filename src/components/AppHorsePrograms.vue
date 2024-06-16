<script lang="ts" setup>
import { useStore } from '@/store'
import AppProgramTable from '@/components/AppProgramTable.vue'
import { computed } from 'vue'

const store = useStore()

const programs = computed(() => store.state.race.programs)
const results = computed(() => store.state.race.results)
</script>

<template>
  <div class="col-span-6 xl:col-span-2 grid grid-cols-2 gap-2">
    <div class="flex flex-col gap-2" data-testid="program-column">
      <h2 class="text-center font-bold">Race Program</h2>
      <AppProgramTable v-for="(program, index) in programs" :key="index" :lap-title="program.lap" :items="program" />
    </div>
    <div class="flex flex-col gap-2" data-testid="results-column">
      <h2 class="text-center font-bold">Results</h2>
      <template v-if="results.length > 0">
        <AppProgramTable v-for="(result, index) in results" :key="index" :lap-title="result.lap" :items="result" />
      </template>
      <div v-else class="text-center text-slate-500" data-testid="race-not-started">Race has not started yet!</div>
    </div>
  </div>
</template>
