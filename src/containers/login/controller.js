import { get } from '@/services/requestHandler'

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
      // const url = `/login/userLogin?loginId=${loginid}&password=${password}`
      const url = '/login/userLogin?loginId=TEST_eJ1q53225410211710&password=123456'
      get(url)
        .then((resp) => {
          // const jsonResp = convertXML(resp.data)
          const xmlParser = new DOMParser()
          const xmlObj = xmlParser.parseFromString(resp.data, 'text/xml')
        })
    }
  }
}
