import { post } from '@/services/requestHandler'

export default {
  data () {
    return {
      loginid: '',
      password: '',
      passwordconf: '',
      nickName: '',
      email: '',
      signupAgree: false
    }
  },
  methods: {
    signUp ($loginID, $password, $passConf, $displayName, $email) {

    }
  }
}
