import router from '@/router'

import { get } from '@/services/requestHandler'
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
      get(url)
        .then((resp) => {
          const jsonObj = xmlConverter(resp.data)
          if(jsonObj.code._text === '1') {
            router.push('ssf')
          }
        })
    }
  }
}
