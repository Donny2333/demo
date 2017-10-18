import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main/Main'
import About from '@/pages/about/About'
import Browser from '@/pages/browser/Browser'
import Comment from '@/pages/comment/Comment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
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
