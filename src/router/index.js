import Vue from 'vue'
import Router from 'vue-router'
import Login from './login/Login.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue)

const route = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})

route.beforeEach((to, from, next) => {
  next()
})

export default route
