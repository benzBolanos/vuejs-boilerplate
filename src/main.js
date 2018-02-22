// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import Vuex from '@/utils/store'
import i18n from '@/utils/language/lang'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import App from '@/App'
import router from '@/router'

Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: Vuex,
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
