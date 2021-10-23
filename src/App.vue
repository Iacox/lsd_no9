<template>
  <v-app>
		<v-app-bar
			absolute
      prominent
			class="px-4"
		>
			<img :src="logo" class="my-auto">
			<v-spacer></v-spacer>

			<div class="d-flex flex-column my-auto">
				<h1 class="mb-4">Kvirin ADD</h1>
				<h2>Защита персональных данных в документах</h2>
			</div>
			<v-spacer></v-spacer>

			<v-btn
				@click="ToggleTheme"
				class="my-auto"
				icon
			>
				<v-icon x-large>{{ $vuetify.theme.isDark ? 'mdi-weather-night' : 'mdi-white-balance-sunny'}}</v-icon>
			</v-btn>
		</v-app-bar>

		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>


<script>
import light from '@assets/image/logo_for_light.png'
import dark from '@assets/image/logo_for_dark.png'

export default {
	name: 'App',
	computed: {
		logo() {
			return this.$vuetify.theme.isDark ? dark : light
		},
	},
	methods: {
		ToggleTheme() {
			this.$vuetify.theme.isDark = !this.$vuetify.theme.isDark
		},
	},
}
</script>

<style lang="scss">
h1 {
	font-family: Roboto, sans-serif;
	font-style: normal;
	font-weight: 700;
	font-size: 48px;
	line-height: 44px;
	text-align: center;
}
h2 {
	font-family: Roboto, sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 24px;
	line-height: 22px;
	text-align: center;
}
.v-toolbar {
	box-shadow: unset !important;
	background: transparent !important;
}
</style>