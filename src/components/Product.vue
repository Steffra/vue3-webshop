<script setup>
  import { mdiCart } from '@mdi/js'
  import BaseButton from '@/components/BaseButton.vue'
  const props = defineProps({
    productData: {
      type: Object,
      required: true,
    },
  })

  let quantity = $ref(0)
  let availableAmount = $ref(props.productData.availableAmount - localStorage.getItem(props.productData.id))
  let error = $ref(false)

  const addToCart = () => {
    if (!isValidInput()) {
      return
    }

    availableAmount -= quantity
    localStorage.setItem(props.productData.id, Number(localStorage.getItem(props.productData.id)) + quantity)
    initInputValue()
  }

  const isValidInput = () => {
    return quantity >= props.productData.minOrderAmount && quantity <= availableAmount
  }

  const validate = () => {
    error = !isValidInput()
    console.log(isValidInput())
  }

  const initInputValue = () => {
    quantity = props.productData.minOrderAmount
  }

  initInputValue()
</script>

<template>
  <div
    v-if="availableAmount >= productData.minOrderAmount"
    class="m-4 text-slate-800 shadow-xl hover:shadow-2xl max-w-7xl text-center xl:text-left bg-slate-200 rounded-md"
  >
    <div class="flex justify-center flex-col mb-6 pt-2 px-2">
      <div class="p-2 bg-white flex justify-center rounded-md">
        <img :src="productData.img" :alt="productData.name" class="w-96 h-96 object-contain" />
      </div>
      <div class="ml-2">
        <h1>
          <b data-test="name">{{ productData.name }}</b>
        </h1>
        <h2 data-test="price">${{ productData.price }}</h2>
        <p data-test="in-stock">{{ availableAmount }} in stock</p>
      </div>

      <div class="flex flex-row justify-start items-start m">
        <BaseButton data-test="add-to-cart" @click="addToCart" label="Add to cart" :icon="mdiCart" class="w-full" />
        <input
          data-test="quantity"
          @keypress.enter="addToCart"
          @keyup="validate"
          type="number"
          :min="productData.minOrderAmount"
          :max="productData.availableAmount"
          v-model="quantity"
          class="w-32 h-12 text-xl px-4 ml-4 text-center rounded-md"
          :class="{ 'outline outline-red-500': error }"
        />
      </div>
    </div>
  </div>
</template>
