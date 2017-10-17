import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'

const mutations = {
  UPDATE_SELECTED_MENU (state, menuIndex) {
    state.selectedMenu = menuIndex
  }
}
const state = {
  selectedMenu: 'about'
}

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations
})
