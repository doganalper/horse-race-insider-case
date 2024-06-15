<script lang="ts" setup>
import type { Horse } from '@/types'

defineProps<{ horse: Horse }>()
</script>

<template>
  <div class="py-2 flex justify-between items-center border-b last-of-type:border-none">
    <div class="flex items-center gap-1.5">
      <div class="w-4 h-4 rounded-md" :style="{ backgroundColor: horse.color }"></div>
      <span class="flex-1">{{ horse.name }}</span>
    </div>
    <span class="text-sm text-slate-500">{{ horse.condition }}</span>
  </div>
</template>
