import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ChiSiamo from '../views/Pages/chiSiamo.vue'
import CosaFacciamo from '../views/Pages/CosaFacciamo.vue'
import Galleria from '../views/Pages/Galleria.vue'
import Contattaci from '../views/Pages/Contattaci.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chi-siamo',
    name: 'chi-siamo',
    component: ChiSiamo
  },
  {
    path: '/cosa-facciamo',
    name: 'cosa-facciamo',
    component: CosaFacciamo
  },
  {
    path: '/galleria',
    name: 'galleria',
    component: Galleria
  },
  {
    path: '/contattaci',
    name: 'contattaci',
    component: Contattaci
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
