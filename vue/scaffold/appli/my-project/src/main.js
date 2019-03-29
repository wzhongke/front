// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(vuex)

const store = new vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state, payload) {
            state.count += payload.amount
        }
    }
})

store.commit('increment', {amount: 1})
console.log(store.state.count)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
