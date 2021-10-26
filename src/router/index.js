import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/nav'
  },
  {
    path: '/nav',
    name: 'nav',
    ps: '路由页面',
    component: () => import('../views/nav')
  },
  {
    path: '/main',
    name: 'main',
    ps: '主页面',
    component: () => import('../views/main/index'),
    children: [
      {
        path: '/main',
        redirect: '/script'
      },
      {
        path: '/script',
        name: 'script',
        component: () => import('../views/main/script/index')
      },
      {
        path: '/crawler',
        name: 'crawler',
        component: () => import('../views/main/crawler/index')
      },
      {
        path: '/store',
        name: 'store',
        component: () => import('../views/main/store/index')
      },
      {
        path: '/setting',
        name: 'setting',
        component: () => import('../views/main/setting/index')
      }
    ]
  },
  {
    path: '/test',
    name: 'test',
    ps: '测试页面',
    component: () => import('../views/test/index'),
    children: [
      {
        path: '/test',
        redirect: '/cmd'
      },
      {
        path: '/cmd',
        name: 'cmd',
        component: () => import('../views/test/cmd/index')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
