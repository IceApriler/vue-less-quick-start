import Layout from '../views/layout/layout'

export default [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首页'
    },
    redirect: { name: 'ExampleList' }
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录'
    },
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/example-list',
    name: 'ExampleList',
    component: Layout,
    meta: {
      title: '例子集合',
      isSidebar: true
    },
    children: [
      {
        path: '',
        name: '',
        redirect: { name: 'ExampleA' }
      },
      {
        path: 'example-a',
        name: 'ExampleA',
        meta: {
          title: '例子A',
          isSidebar: false
        },
        component: () => import('../views/example/exampleA/index.vue')
      },
      {
        path: 'example-B',
        name: 'ExampleB',
        meta: {
          title: '例子B',
          isSidebar: true
        },
        component: () => import('../views/example/exampleB/index.vue')
      }
    ]
  },
  {
    path: '/demo-list',
    name: 'DemoList',
    component: Layout,
    meta: {
      title: 'demo集合',
      isSidebar: true
    },
    children: [
      {
        path: '',
        name: '',
        redirect: { name: 'ExampleA' }
      },
      {
        path: 'demo-a',
        name: 'DemoA',
        meta: {
          title: 'demoA',
          isSidebar: true
        },
        component: () => import('../views/example/exampleA/index.vue')
      },
      {
        path: 'demo-B',
        name: 'DemoB',
        meta: {
          title: 'demoB',
          isSidebar: true
        },
        component: () => import('../views/example/exampleB/index.vue')
      }
    ]
  }
]
