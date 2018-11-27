import * as types from './mutation-types'

const mutations = {
	[types.SET_VERBSTATE] (state, verbstate) {
		state.verbState = verbstate
	},
	[types.SET_TOKEN] (state, token) {
		state.token = token
	}
}

export default mutations