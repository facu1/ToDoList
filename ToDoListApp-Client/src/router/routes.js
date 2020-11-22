const routes = [
  {
    path: '/',
    component: () => import('pages/Index.vue')
  },
  {
    path: '/todolist',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'todolist', component: () => import('pages/TodoList.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
