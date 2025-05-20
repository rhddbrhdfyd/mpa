<template>
  <div>
    <h3>경품 추천</h3>
    <button @click="recommend">추천받기</button>
    <p v-if="selected">추천 경품: {{ selected }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gifts: ['텀블러', '쿠폰', '기프트카드', '무선 이어폰'],
      selected: null
    }
  },
  methods: {
    recommend() {
      const i = Math.floor(Math.random() * this.gifts.length)
      this.selected = this.gifts[i]
    }
  }
}
</script>
