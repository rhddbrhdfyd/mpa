// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'
import Curation from '../components/Curation.vue'
import GiftRecommend from '../components/GiftRecommend.vue'

const routes = [
  { path: '/', redirect: '/curation' },
  { 
    path: '/curation', 
    component: Curation,
    props: { title: '추천 선물', category: 'gift'} 
  },
  { path: '/gift', component: GiftRecommend },
]

const router = createRouter({
  history: createWebHashHistory(),  
  routes,
})

export default router