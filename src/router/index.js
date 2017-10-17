import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Browser from '@/components/Browser'
import Comment from '@/components/Comment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: (to, from, next) => {
        next()
      },
      children: [{
        name: 'about',
        path: 'about',
        component: About
      }, {
        name: 'browser',
        path: 'browser',
        component: Browser
      }, {
        name: 'comment',
        path: 'comment',
        component: Comment
      }]
    }
  ]
})
