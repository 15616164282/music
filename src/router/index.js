import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BangDan from '../views/bangDan.vue'
import GeDan from '../views/geDan.vue'
import MusicNews from '../views/musicNews.vue'
import Singer from '../views/singer.vue'
import Singerin from '../views/singerInformation.vue'
import Gedanin from '../views/gedanInfor.vue'
import Login from '../views/login.vue'
import SearchList from '../views/searchList.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    // redirect: "/home",
  },
  {
    path: '/bangdan',
    name: 'BangDan',
    component: BangDan,
    // redirect: "/home",
  },
  {
    path: '/gedan',
    name: 'GeDan',
    component: GeDan,
    // redirect: "/home",
  },
  {
    path: '/musicNews',
    name: 'MusicNews',
    component: MusicNews,
    // redirect: "/home",
  },
  {
    path: '/singer',
    name: 'Singer',
    component: Singer,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    // redirect: "/home",
  },
  {
    path: '/singerin/:id',
    name: 'Singerin',
    component: Singerin,
    // redirect: "/home",
  },
  {
    path: '/gedanin/:id',
    name: 'Gedanin',
    component: Gedanin,
    // redirect: "/home",
  },
  {
    path: '/searchList/:name',
    name: 'SearchList',
    component: SearchList,
    // redirect: "/home",
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router