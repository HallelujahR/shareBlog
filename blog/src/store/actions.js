import mutatoins from './mutations'
import { server } from '../providers/http-service'
import router from '../router'

const actions = {
  setUser (state) {

    //获取用户基本信息
    server.getUser().then(data => {
      //提交到mutationss
      state.commit('SET_USER', data);
      // router.push({name: 'photo'});
    })

  },
}

export default actions