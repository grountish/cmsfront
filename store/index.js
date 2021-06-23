
export const state = () => ({
    lang: 'es',
    
  })
  
  export const mutations = {
    SET_lang(state, lang){
      state.lang = lang
    },
   
  }

//   export const actions = {
//     async nuxtServerInit({ commit }) {
//       const {result} = await this.$axios.$get('https://ygcad2ic.api.sanity.io/v1/data/query/production?query=*%5B_type%3D%3D%22post%22%5D%7B%0A%20%20...%2C%0A%20%20author-%3E%7Bname%7D%2C%0A%20%20category%7B%0A%20%20%20subcategory-%3E%7Bid%7D%7D%0A%7D')
//     commit('SET_posts', result)
//   } }