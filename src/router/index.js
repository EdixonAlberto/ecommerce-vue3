import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('~VIEWS/Home')
const Wallet = () => import('~VIEWS/Wallet')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/wallet',
    name: 'wallet',
    component: Wallet
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
