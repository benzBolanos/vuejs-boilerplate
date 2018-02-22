import { get } from '@/services/requestHandler'

// directive
import { test } from '@/directives/test'

// child component
import Child from '@/components/child/index'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      parentData: 'this is from parent'
    }
  },
  components: {
    child: Child
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
