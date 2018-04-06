import Vue from 'vue'
import Vuex from 'vuex'

import VueIdb from './idb'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hydrated: false,
    jsession: ''
  },
  actions: {
    assignJSession (state, payload) {
      this.commit('assignJSession', payload)
    }
  },
  mutations: {
    assignJSession (state, payload) {
      this.state.jsession = payload
    }
  },
  modules: {
    VueIdb: VueIdb.modules
  },
  getters: {
    hydrated: state => state.hydrated
  },
  plugins: [ VueIdb.plugin ],
  strict: true
})
