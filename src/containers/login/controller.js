import router from '@/router'

import { Get } from '@/services/requestHandler'
import { xmlConverter } from '@/services/xmlParser'

export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      loginid: '',
      password: ''
    }
  },
  created: () => {
  },
  methods: {
    login (loginid, password) {
      const url = `/login/userLogin?loginId=${loginid}&password=${password}`
      // const url = '/login/userLogin?loginId=TEST_eJ1q53225410211710&password=123456'
      Get(url)
        .then((resp) => {
          const jsonObj = xmlConverter(resp.data)
          if (jsonObj.code._text === '1') {
            this.$store.dispatch('assignJSession', jsonObj.data.jsessionid._text)
          }
        })
    }
  }
}
