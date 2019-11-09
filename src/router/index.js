import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicView from '../views/BasicView.vue'
import ORMView from '../views/ORMView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/basic',
    name: 'basic',
    component: BasicView
  },
  {
    path: '/orm',
    name: 'orm',
    component: ORMView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
