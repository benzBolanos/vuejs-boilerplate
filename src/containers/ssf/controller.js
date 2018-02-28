import axios from 'axios'
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
  created () {
    const cc = Math.floor(Math.random() * 99999)
    const url = `/mypage/getmypageinfo?phraseSpFlg=1&cc=${cc}`
    console.log(this.$store)
    // axios.defaults.headers.common['cookie'] = `JSESSIONID=${this.$store}`
    // const url = '/login/userLogin?loginId=TEST_eJ1q53225410211710&password=123456'
    Get(url)
      .then((resp) => {
        const jsonObj = xmlConverter(resp.data)
        console.log(jsonObj)
      })
  },
  methods: {
  }
}
