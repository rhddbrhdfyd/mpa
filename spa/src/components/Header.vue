<!-- src/components/Header.vue -->
<template>
  <div class="wrap">
    <h1>
      <a href="#" class="block">주영's 지식쇼핑몰</a>
    </h1>
    <nav>
      <ul class="gnb flex">
        <!-- MPA 페이지 링크는 그대로 a 태그 -->
        <li><a href="/" class="block">홈</a></li>
        <li><a href="/mpa-pages/about.html" class="block">소개</a></li>

        <!-- SPA 라우터 링크 -->
        <li>
          <RouterLink to="/curation" class="block">상품 큐레이션</RouterLink>
        </li>
        <li>
          <RouterLink to="/gift" class="block">경품 추천</RouterLink>
        </li>
      </ul>
      <ul class="enb flex">
        <li><a href="#">로그인</a></li>
        <li><a href="#">회원가입</a></li>
        <li><a href="#">고객센터</a></li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
// Composition API 방식에서는 <script setup> 사용
import { RouterLink } from 'vue-router'
import '../../../assets/css/header.css'

</script>

<style scoped>

</style>