export const state = () => ({
	lang: 'es',
	style:null
})

export const mutations = {
	SET_lang(state, lang) {
		state.lang = lang
	},
	SET_style(state, style) {
		state.style = style
	},
}
export const actions = {
    async nuxtServerInit({ commit }) {
      const {result} = await this.$axios.$get('https://1f2vyuv5.api.sanity.io/v2021-03-25/data/query/production?query=*%5B_type%3D%3D%22settings%22%5D%5B0%5D%7B%22code%22%3A%20pt%3A%3Atext(code)%7D')
    commit('SET_style', result)
	
  } }