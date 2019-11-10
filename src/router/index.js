import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicUsersView from '../views/BasicUsersView.vue'
import BasicPostsView from '../views/BasicPostsView.vue'
import ORMUsersView from '../views/ORMUsersView.vue'
import ORMPostsView from '../views/ORMPostsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/basicUsers',
    name: 'basicUsers',
    component: BasicUsersView
  },
  {
    path: '/basicPosts',
    name: 'basicPosts',
    component: BasicPostsView
  },
  {
    path: '/ormUsers',
    name: 'ormUsers',
    component: ORMUsersView
  },
  {
    path: '/ormPosts',
    name: 'ormPosts',
    component: ORMPostsView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
