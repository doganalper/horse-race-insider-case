<script lang="ts" setup>
interface ButtonProps {
  text: string
}

defineProps<ButtonProps>()

const emit = defineEmits<{
  (e: 'click'): void,
}>()
</script>

<template>
  <button
    class="border px-2 py-0.5 rounded-md transition-colors hover:border-slate-400"
    @click="emit('click')"
  >
    {{ text }}
  </button>
</template>
