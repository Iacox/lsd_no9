import Vue from 'vue'
import Vuetify from 'vuetify'
//  Colors
import colors from 'vuetify/lib/util/colors'
//  i11e Ru
import ru from 'vuetify/lib/locale/ru'
import en from 'vuetify/lib/locale/en'
//  Styles
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

//  Config
const opts = {
	lang: {
		locales: { ru, en },
		current: 'ru'
	},
	icons: {
    iconfont: 'mdi',
  },

	theme: {
		dark: true,

		themes: {
			light: {
				primary: colors.blue.darken4,
				secondary: colors.blueGrey.darken3,
				accent: colors.blueGrey.darken4
			},
			dark: {
				primary: colors.blueGrey.darken3,
				secondary: colors.blueGrey.lighten2,
				accent: colors.blueGrey.lighten5
			}
		}
	}
}

export default new Vuetify(opts)
