import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import DataBinding from '../views/DataBinding.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/dataBinding',
    name: 'dataBinding',
    component: () => import(/* webpackChunkName: "DataBinding" */ '../views/dataBinding/DataBinding.vue')
  },
  {
    path: '/dataBindingHtml',
    name: 'dataBindingHtml',
    component: () => import(/* webpackChunkName: "DataBindingHtml" */ '../views/dataBinding/DataBindingHtml.vue')
  },
  {
    path: '/dataBindingInput',
    name: 'dataBindingInput',
    component: () => import(/* webpackChunkName: "DataBindingInput" */ '../views/dataBinding/DataBindingInput.vue')
  },
  {
    path: '/dataBindingList',
    name: 'dataBindingList',
    component: () => import(/* webpackChunkName: "DataBindingList" */ '../views/dataList/DataBindingList.vue')
  },
  {
    path: '/eventpage',
    name: 'eventpage',
    component: () => import(/* webpackChunkName: "EventPage" */ '../views/event/EventPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
