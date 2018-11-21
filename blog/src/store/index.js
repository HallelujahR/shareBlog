import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// Vue.use(mapState)
// const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store ({
	strict: process.env.NODE_ENV !== 'production',
	state:{
		verbState:false,
		token:'',
	},
	mutations: {
	    changeToken (state, payload) {
	      // 变更状态
	      state.token = payload.token;
	      state.verbState = payload.verbState;
	    },
	}
})