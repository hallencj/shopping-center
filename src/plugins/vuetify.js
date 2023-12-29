import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { 
  mdiBagChecked, 
  mdiMagnify, 
  mdiCart, 
  mdiAccount, 
  mdiEye, 
  mdiEyeOff, 
  mdiFacebook, 
  mdiTwitter, 
  mdiInstagram, 
  mdiCheckCircle, 
  mdiGiftOff, 
  mdiInformation, 
  mdiChevronDown, 
  mdiBank,
  mdiCog,
  mdiLogout
} from '@mdi/js'

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
      mdiFacebook,
      mdiTwitter,
      mdiInstagram,
      mdiCheckCircle,
      mdiGiftOff,
      mdiInformation,
      mdiChevronDown,
      mdiBank,
      mdiCog,
      mdiLogout
    },
    sets: {
      mdi
    }
  },
  theme: {
    themes: {
      light: {
        colors: {
          'primary': '#4F6F52',
          'secondary': '#739072',
          'error': '#EF5350'
        }
      }
    }
  }
})
