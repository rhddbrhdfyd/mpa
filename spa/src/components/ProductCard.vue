<template>
  <div style="border: 1px solid #ccc; padding: 10px; margin: 5px; width: 150px;">
    <strong>{{ product.name }}</strong>
    <p>{{ product.price.toLocaleString() }}원</p>
  </div>
</template>

<script>
export default {
  props: ['product']
}
</script>
