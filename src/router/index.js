import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Home.vue'
import AboutView from '../views/About.vue'
import ResumeView from '../views/Resume'
// import EducationView from '../views/Education'
// import ExperienceView from '../views/Experience'
import PortfolioView from '../views/Portfolio'
import ContactView from '../views/Contact'

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
    path: '/resume',
    name: 'resume',
    component: ResumeView,
    meta: {
      title:"Resume"
    }
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioView,
    meta: {
      title:"Portfolio"
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: {
      title:"Contact"
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
