export default {
  name: 'child',
  data () {
    return {
      msg: 'hi child sub component!',
      passedData: false
    }
  },
  props: {
    parentData: {
      type: String,
      default () {
        return ''
      }
    }
  }
}
