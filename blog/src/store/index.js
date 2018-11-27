import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
// Vue.use(mapState)
const debug = process.env.NODE_ENV !== 'production'



export default new Vuex.Store ({
    state,
    actions,
    getters,
    mutations,
	strict: debug,
    plugins: debug ? [createLogger()] : [] ,

	// mutations: {
	//     changeToken (state, payload) {
	//       // 变更状态
	//       state.token = payload.token;
	//       state.verbState = payload.verbState;
	//     },
	//     //添加用户基本信息
	//     setUser (state, payload) {
	//     	console.log(state);
	//     	state.user = payload.user
	//     },
    //
	// },
	actions: {
		setUser (state) {
			console.log(state);
			//获取用户基本信息
			axios.get('http://api.blog.com/user',
			{
				headers: {
		            'Authorization': 'Bearer ' + state.rootState.token,
		        },
		        params: {

		        },

			})
			.then(response => {
				console.log(response);

				state.commit('setUser',{
					user:response.data

				});

				// console.log(response.data.avatar)
			})
			.catch(error => {

			})

		}
	}
})

