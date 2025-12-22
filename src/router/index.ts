import { useAdminStore } from '@/stores/admin'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login.vue'),
    },
    {
      path: '/index',
      name: 'Index',
      redirect: '/welcome',
      component: () => import('@/views/Index.vue'),

      children: [
        {
          path: '/welcome',
          name: 'Welcome',
          component: () => import('@/views/WelcomeVue.vue'),
        },
        {
          path: '/list',
          name: 'List',
          component: () => import('@/views/admin/List.vue'),
        },
      ],
    },
  ],
})

router.beforeEach(async (to, from) => {
  if (to.path == '/login') {
    return true
  }
  const token = useAdminStore().getToken
  if (!token) {
    return { path: '/login' }
  }
})

export default router
