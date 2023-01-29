<script setup>
  import { mdiCartRemove } from '@mdi/js'
  import { router } from '@/router/index'
  import BaseButton from '@/components/BaseButton.vue'

  const props = defineProps({
    productData: {
      type: Object,
      required: true,
    },
  })

  const emit = defineEmits(['addToCart'])

  const quantity = localStorage.getItem(props.productData.id)

  const removeFromCart = () => {
    localStorage.removeItem(props.productData.id)
    router.go('0')
  }
</script>

<template>
  <div class="m-4 text-slate-800 shadow-xl hover:shadow-2xl max-w-7xl text-center xl:text-left bg-slate-200 rounded-md">
    <div class="flex justify-center flex-col mb-6 pt-2 px-2">
      <div class="p-2 bg-white flex justify-center rounded-md">
        <img :src="productData.img" :alt="productData.name" class="w-96 h-96 object-contain" />
      </div>
      <div class="ml-2">
        <h1>
          <b>{{ productData.name }}</b>
        </h1>
        <h2>${{ productData.price * quantity }}</h2>
        <p class="text-sm py-2 text-slate-700">({{ productData.price }}$ each, {{ quantity }} pieces)</p>
      </div>

      <div class="flex flex-row justify-start items-start m">
        <BaseButton @click="removeFromCart" label="Remove" :icon="mdiCartRemove" class="w-full" />
      </div>
    </div>
  </div>
</template>
