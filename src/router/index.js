import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/nav'
  },
  {
    path: '/nav',
    name: 'nav',
    component: () => import('../views/nav')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/test/index')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
