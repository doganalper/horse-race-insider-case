<script lang="ts" setup>
import type { Program } from '@/types'

defineProps<{
  title: string
  items: Program
}>()
</script>

<template>
  <div class="border rounded-md elevated-card">
    <div class="border-b font-semibold pb-2 pl-1">{{ title }}</div>
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
          <td class="">{{ item.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
