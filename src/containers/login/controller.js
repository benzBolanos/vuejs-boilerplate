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
    login(loginid, password) {
      const url = `/login/userLogin?loginid=${ loginid }&password=${ password }`
      get(url)
        .then((resp) => {
          console.log(resp)
        })
    }
  }
}
