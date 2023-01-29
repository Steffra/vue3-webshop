<script setup>
  import { router } from '@/router/index'
  import Product from '@/components/Product.vue'
  import BaseButton from '@/components/BaseButton.vue'
  import { mdiCartArrowRight, mdiStore } from '@mdi/js'
  import Icon from '@/components/Icon.vue'

  let products = $ref([])

  fetch('https://63c10327716562671870f959.mockapi.io/products')
    .then((result) => result.json())
    .then((data) => {
      products = data
    })
</script>

<template>
  <div class="p-2">
    <div class="flex justify-between p-2">
      <h1>
        <span><Icon :path="mdiStore" large/></span>Products
      </h1>
      <BaseButton label="Checkout" :icon="mdiCartArrowRight" @click="router.push('/cart')" />
    </div>
    <hr />
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
      <Product v-for="product in products" :productData="product" />
    </div>
  </div>
</template>
