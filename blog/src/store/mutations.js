import * as types from './mutation-types'

const mutations = {
	[types.SET_VERBSTATE] (state, verbstate) {
		state.verbState = verbstate
	},
	[types.SET_TOKEN] (state, token) {
		state.token = token
	},
	[types.SET_USER] (state, user) {
		state.user = user
	}
}

export default mutations