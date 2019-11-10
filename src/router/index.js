import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicUsersView from '../views/BasicUsersView.vue'
import ORMUsersView from '../views/ORMUsersView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/basicUsers',
    name: 'basicUsers',
    component: BasicUsersView
  },
  {
    path: '/ormUsers',
    name: 'ormUsers',
    component: ORMUsersView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
