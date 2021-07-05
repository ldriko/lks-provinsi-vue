import axios from 'axios'

export default {
  namespaced: true,

  state: {
    authenticated: false,
    user: null,
  },

  mutations: {
    setAuthenticated({ state }, value) {
      state.authenticated = value
    },

    setUser({ state }, value) {
      state.user = value
    },
  },

  actions: {
    async login({ dispatch }, credentials) {
      await axios.get('/../sanctum-csrf')

      await axios.post('/../login', credentials).then(() => {
        dispatch('check')
      })
    },

    async check({ commit }) {
      await axios
        .get('/user')
        .then((response) => {
          commit('setAuthenticated', true)
          commit('setUser', response.data)
        })
        .catch(() => {
          commit('setAuthenticated', false)
          commit('setUser', null)
        })
    },
  },
}
