import Vue from 'vue'
import Router from 'vue-router'
import Main from './components/layout/Main'
import Content from './components/layout/Content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main,
      children: [
        {
            path: 'content',
            component: Content
          }
      ]
    }
   
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
