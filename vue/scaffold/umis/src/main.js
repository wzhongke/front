// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.css'
// 使用了 font awesome的icon库 ： http://www.bootcss.com/p/font-awesome/
import 'bootstrap/dist/css/font-awesome.css'
import 'jquery';
import 'bootstrap';
import './js/jquery.resizableColumns.min';
import './js/chosen.jquery'
import './js/jquery-ui.min'
import Vue from 'vue'
import umisHeader from './components/umisHeader'
import router from './router'
import store from './store'
import App from './App'


Vue.config.productionTip = false
const views = {
    umisHeader
}

const install = function (Vue, opts = {}) {
    Object.keys(views).forEach(key => {
        Vue.component(key, iview[key])
    })
}
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: "<App />",
    components: {App},
})
