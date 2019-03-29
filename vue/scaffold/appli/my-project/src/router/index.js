import Vue from 'vue'
import Router from 'vue-router'
import fashine from '../components/fashion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: fashine
    }
  ]
})
