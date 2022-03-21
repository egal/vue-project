import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      breadcrumb: { name: 'home', link: '' },
    },
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/user-profile',
    name: 'UserProfile',
    meta: {
      breadcrumb: { name: 'Profile', link: 'user-profile' },
    },
    component: () => import('../components/UserProfile.vue'),
  },
  {
    path: '/user',
    name: 'User',
    meta: {
      breadcrumb: 'User',
    },
    children: [
      {
        path: '/user_child',
        name: 'User child',
        meta: {
          breadcrumb: { name: 'User Child', link: 'user_child' },
        },
        component: () => import('../components/UserProfile.vue'),
      },
    ],
    component: () => import('../components/UserProfile.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
