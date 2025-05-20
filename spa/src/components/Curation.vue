<!-- src/components/Curation.vue -->
<template>
  <div class="curation">
    <h2>{{ title }}</h2>
    <div class="product-list">
      <ProductCard
        v-for="item in filteredProducts"
        :key="item.id"
        :product="item"
      />
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import ProductCard from './ProductCard.vue'

const props = defineProps({
  title: String,
  category: String
})

const products = ref([])
const filteredProducts = ref([])

onMounted(async () => {
  const res = await fetch('./products.json')
  const data = await res.json()
  products.value = data

  // 카테고리 필터링 (ex: "gift", "summer", "popular")
  filteredProducts.value = products.value.filter(
    item => item.category === props.category
  )
})
</script>