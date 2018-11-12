import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Weather from '@/components/Weather'
import SinglePage from '@/components/SinglePage'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Weather',
      name: 'Weather',
      component: Weather
    },
    {
      path: '/SPage',
      name: 'SinglePage',
      component: SinglePage
    }
  ]
})
