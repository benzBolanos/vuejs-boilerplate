import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from './sets/en'
import jp from './sets/jp'

Vue.use(VueI18n)

const locale = 'en'

const messages = {
  en,
  jp
}

const i18n = new VueI18n({
  locale,
  messages
})

export default i18n
