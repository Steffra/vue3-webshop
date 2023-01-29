<script setup>
  import { router } from '@/router/index'
  import { mdiStorePlus, mdiCart, mdiCartOff } from '@mdi/js'
  import CartItem from '@/components/CartItem.vue'
  import BaseButton from '@/components/BaseButton.vue'
  import Icon from '@/components/Icon.vue'

  let cartItems = $ref([])
  let isLoading = $ref(true)
  let totalAmountToPay = $ref(0)

  fetch('https://63c10327716562671870f959.mockapi.io/products')
    .then((result) => result.json())
    .then((data) => {
      cartItems = data.filter((product) => localStorage.getItem(product.id))
      updateTotalCost()
      isLoading = false
    })

  const updateTotalCost = () => {
    if (cartItems.length) {
      totalAmountToPay = cartItems.map((cartItem) => cartItem.price * localStorage.getItem(cartItem.id)).reduce((a, b) => a + b)
    }
  }
</script>

<template>
  <div class="p-2">
    <div class="flex justify-between p-2">
      <h1>
        <span><Icon :path="mdiCart" large /></span>Cart
      </h1>
      <BaseButton label="Continue shopping" :icon="mdiStorePlus" @click="router.push('/products')"> Continue shopping </BaseButton>
    </div>
    <hr />
    <h2 v-if="totalAmountToPay" class="ml-3 mt-2">
      Total cost: <b>${{ totalAmountToPay }}</b>
    </h2>
    <div v-if="!isLoading && cartItems.length == 0" class="mt-3 text-xl text-center w-full">
      The cart is empty. <Icon :path="mdiCartOff" />
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4">
      <CartItem v-for="product in cartItems" :productData="product" />
    </div>
  </div>
</template>
