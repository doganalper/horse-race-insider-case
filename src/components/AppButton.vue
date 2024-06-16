<script lang="ts" setup>
export interface AppButtonProps {
  text: string
  disabled?: boolean
}

defineProps<AppButtonProps>()

const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <button
    class="border px-2 py-0.5 rounded-md transition-colors hover:border-slate-400 bg-white disabled:text-slate-400 disabled:cursor-not-allowed"
    :disabled="disabled"
    @click="emit('click')"
  >
    {{ text }}
  </button>
</template>
