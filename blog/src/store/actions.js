import mutatoins from './mutations'
import {server} from '../providers/http-service'
const actions = {
    setUser (state) {

        //获取用户基本信息
        server.getUser().then(data => {
            console.log(data);
            //提交到mutationss
            state.commit('SET_USER',data);
        })

    },
}

export default actions