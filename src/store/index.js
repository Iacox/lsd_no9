import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filesData: [],
    linkList: [],
  },
  mutations: {
		SET_STATE(state, { key, value }) {
			state[key] = value
		}
	},
  actions: {
    async sendFiles({ commit }, filesData) {
			try {
				const res = await Api.sendFiles(filesData)
				if (res.success)
          commit('SET_STATE', {
            key: 'linkList',
            value: res.data,
          })
				return res
			} catch (e) {
				console.error(e)
			}
		},
  },
})
