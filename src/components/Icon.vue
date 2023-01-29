<script setup>
  const props = defineProps({
    path: {
      type: String,
      required: true,
    },
    large: Boolean,
  })
</script>

<template>
  <svg viewBox="0 0 24 24" :width="large ? 30 : 24" :height="large ? 30 : 24" class="inline-block">
    <path fill="currentColor" :d="path" />
  </svg>
</template>
