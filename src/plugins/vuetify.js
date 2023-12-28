import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { mdiBagChecked, mdiMagnify, mdiCart, mdiAccount, mdiEye, mdiEyeOff, mdiAlert, mdiFacebook, mdiTwitter, mdiInstagram } from '@mdi/js'

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases,
      mdiBagChecked,
      mdiMagnify,
      mdiCart,
      mdiAccount,
      mdiEye,
      mdiEyeOff,
      mdiAlert,
      mdiFacebook,
      mdiTwitter,
      mdiInstagram
    },
    sets: {
      mdi
    }
  },
  theme: {
    themes: {
      light: {
        colors: {
          'primary-color': '#4F6F52',
          'secondary-color': '#739072'
        }
      }
    }
  }
})
