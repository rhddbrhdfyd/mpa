import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Curation from '../views/Curation.vue'
import Reward from '../views/Reward.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/curation', component: Curation },
  { path: '/reward', component: Reward },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router