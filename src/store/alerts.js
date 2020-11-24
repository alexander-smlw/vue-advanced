export default {
	namespaced: true,
	state: {
    messages: [],
    id: 0
	},
	getters: {
		all: state => state.messages,
	},
	mutations: {
		add(state, message){
      state.messages.push(message)
      state.id++
		},
		remove(state, id) {
      state.messages = state.messages.filter(message => message.id !== id)
    },
	},
	actions: {
		add({ state, commit, dispatch }, { ...options }){
      const id = state.id
      commit('add', { id, ...options });

      if (options.timeout) {
        setTimeout(() => {
          dispatch('remove', id)
        }, options.timeout)
      }
    },
    remove({ commit }, id) {
      commit('remove', id)
    }
	}
}