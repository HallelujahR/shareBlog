import axios from 'axios';
import intercept from './intercept';
import * as types from './axios-method';

/**
 * 下面是获取数据的接口
 */
export const server = {
    getCaptchas: function(paramObj){
        return types.post('/captchas',paramObj);
    },
    login: function(paramObj) {
        return types.post('/authorizations',paramObj);
    },
    checkYzm: function(paramObj) {
        return types.post('/verificationCodes',paramObj);
    },
    regNow: function(paramObj) {
        return types.post('/users',paramObj);
    },
    //在action中获取用户基本信息
    getUser: function () {
        return types.fetch('/user');
    },
    //刷新token
    refreshToken: function() {
        return types.put('/authorizations/current');
    }
};

