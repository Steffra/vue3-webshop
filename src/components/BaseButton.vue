<script setup>
  import Icon from '@/components/Icon.vue'

  const props = defineProps({
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  })
  const emit = defineEmits(['click'])
</script>

<template>
  <button class="flex flex-nowrap justify-center items-center px-3 h-12 text-white ml-2 bg-slate-600 hover:bg-slate-500 active:bg-slate-800 rounded-md" @click="emit('click')">
    <span class="whitespace-nowrap">{{ label }}</span>
    <span class="ml-2">
      <Icon :path="icon" />
    </span>
  </button>
</template>
