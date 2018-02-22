import Vue from 'vue'
import Vuex from 'vuex'

import VueIdb from './idb'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hydrated: false,
    test: 'wews'
  },
  actions: {
  },
  mutations: {
    'DELETE_INDEXED_DB' () {
    }
  },
  modules: VueIdb.modules,
  getters: {
    hydrated: state => state.hydrated
  },
  plugins: [ VueIdb.plugin ],
  strict: true
})
