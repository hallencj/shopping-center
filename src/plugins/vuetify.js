import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { mdiMagnify, mdiCart, mdiEye, mdiEyeOff, mdiAlert } from '@mdi/js'

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases,
      mdiMagnify,
      mdiCart,
      mdiEye,
      mdiEyeOff,
      mdiAlert
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
