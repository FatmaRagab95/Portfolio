import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Home.vue'
import AboutView from '../views/About.vue'
import EducationView from '../views/Education'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title:"Home"
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      title:"About"
    }
  },
  {
    path: '/education',
    name: 'education',
    component: EducationView,
    meta: {
      title:"Education"
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
