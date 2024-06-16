<script lang="ts" setup>
import type { Program } from '@/types'

defineProps<{
  lapTitle: string
  items: Program
}>()
</script>

<template>
  <div class="border rounded-md elevated-card">
    <div class="border-b font-semibold pb-2 pl-1">{{ lapTitle }}</div>
    <table class="w-full border-x">
      <thead class="border-b">
        <tr>
          <th class="w-[27%]">Pos.</th>
          <th class="text-left">Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items.horses" :key="item.id" class="border-b">
          <td class="text-center">{{ index + 1 }}</td>
          <td class="flex items-center space-x-1.5">
            <div class="w-3 h-3 rounded-full" :style="{ backgroundColor: item.color }"></div>
            <span>
              {{ item.name }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
