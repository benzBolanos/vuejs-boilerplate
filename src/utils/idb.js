import Vue from 'vue'
import VueIdb from 'vue-idb'

Vue.use(VueIdb)

export default new VueIdb({
  version: 1,
  database: 'wordengine',
  schemas: [
    { tests: 'id, title, created_at, updated_at' }
  ]
})
