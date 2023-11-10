import { createStore } from 'vuex'

export default createStore({
    state: () => ({
        user: null,
    }),
    getters: {
        loginStatus: (state) => !!state.user,
    },
    actions: {
        login({ commit }, { user }) {
            commit('SET_USER', user)
        },
        logout({ commit }) {
            commit('SET_USER', null)
        },
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user
        },
    },
})
