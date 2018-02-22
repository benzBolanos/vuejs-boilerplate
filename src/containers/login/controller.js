export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      loginid: 'testing',
      password: ''
    }
  },
  created: () => {
  },
  methods: {
  },
  component: {
    props: ['loginid']
  }
}
