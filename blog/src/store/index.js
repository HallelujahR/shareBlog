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
})

