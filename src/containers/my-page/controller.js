// directive
import { test } from '@/directives/test'

export default {
  name: 'My Page',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      parentData: 'this is from parent'
    }
  },
  methods: {
    switchLocale (lang) {
      this.$i18n.locale = lang
    }
  },
  directives: {
    test
  }
}
