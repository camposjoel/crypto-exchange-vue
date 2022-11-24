import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import CoinDetail from './views/CoinDetail.vue'
// import Error from './views/Error.vue'


const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/coin/:id',
      name: 'coin-detail',
      component: CoinDetail
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'home' }
    }
  ]
})

export default router
