/**
 * author: reggie
 * email: reggielee@163.com
 * date: 17-5-20.
 */

const types = {
  request: 'login/request'
}
// initial state
const state = {
  count: 0
}

// getters
const getters = {
  count: state => state.count
}

// actions
const actions = {
  checkUserName ({commit}) {
    commit(types.request)
  }
}

// mutations
const mutations = {
  [types.request] (state) {
    state.count++
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
