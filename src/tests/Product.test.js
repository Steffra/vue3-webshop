import { test, expect, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Product from '@/components/Product.vue'

beforeEach(async () => {
  localStorage.setItem('test_product_id', 3)
})

afterEach(async () => {
  localStorage.removeItem('test_product_id')
})

const props = {
  productData: {
    id: 'test_product_id',
    name: 'Test product',
    price: 9.99,
    availableAmount: 10,
    minOrderAmount: 3,
  },
}

const clickCartButton = async (wrapper) => {
  await wrapper.find('[data-test="add-to-cart"]').trigger('click')
}

test('mount component', async () => {
  expect(Product).toBeTruthy()
  const wrapper = mount(Product, { props })

  expect(wrapper.find('[data-test="name"]').text()).toBe('Test product')
  expect(wrapper.find('[data-test="price"]').text()).toBe('$9.99')
  expect(wrapper.find('[data-test="in-stock"]').text()).toBe('7 in stock')
})

test('add to cart', async () => {
  const wrapper = mount(Product, { props })

  await clickCartButton(wrapper)
  expect(wrapper.find('[data-test="in-stock"]').text()).toBe('4 in stock')
  expect(localStorage.getItem('test_product_id')).toBe(6)
})

test('unable to add more than available in stock', async () => {
  const wrapper = mount(Product, { props })

  wrapper.find('[data-test="quantity"]').setValue(100)
  await clickCartButton(wrapper)
  expect(localStorage.getItem('test_product_id')).toBe(3)
})

test('unable to add less than minOrderAmount', async () => {
  const wrapper = mount(Product, { props })

  wrapper.find('[data-test="quantity"]').setValue(2)
  await clickCartButton(wrapper)
  expect(localStorage.getItem('test_product_id')).toBe(3)
})
