/**
 * author: reggie
 * email: reggielee@163.com
 * date: 17-5-20.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import login from '../router/login/module'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    login
  },
  strict: debug
})
