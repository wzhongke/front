import Vue from 'vue'
import VueRouter from 'vue-router'
import umisForm from '@/components/umisForm'
import umisTable from '@/components/umisTable'
import umisStore from '@/components/umisStore'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {path: '/', component: umisStore},
        {path: '/input', component: umisForm},
        {path: '/table', component: umisTable}
    ]
})
