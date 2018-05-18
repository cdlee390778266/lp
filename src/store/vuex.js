import Vue from 'vue';
import Vuex from 'vuex';
import { Message } from 'element-ui';
import CONFIG from '../service/config';
import VueCookies from 'vue-cookies'

Vue.use(Vuex);

// 不建议线上使用
const debug = process.env.NODE_ENV !== 'production';

/**
 * export一个store的单例
 */
var cookie = JSON.parse(VueCookies.get(CONFIG.cookieKey));

export default new Vuex.Store({
	state: {
		isLogin: cookie ? cookie.isLogin : false ,
		carts: [],
		loginUsers: []
	},
	mutations: {
		addToCart: function(state, payload) {
			var hasGoods = false;
			var index = 0;
			for(var i = 0; i < state.carts.length; i++) {
				if(state.carts[i].id == payload.id) {
					hasGoods = true;
					index = i;
					break;
				}
			}
			if(hasGoods) {
				state.carts[index].nums = state.carts[index].nums + payload.nums;
			}else {
				state.carts.push(payload);
			}

			Message({
			    showClose: true,
			    message: '已加入购物车',
			    type: 'success'
			});
		},
		removeToCart: function(state, payload) {
			for(var i = 0; i < state.carts.length; i++) {
				if(state.carts[i].id == payload.id) {
					state.carts.slice(i, 1);
					break;
				}
			}
			Message({
			    showClose: true,
			    message: '已将此商品从购物车中移除',
			    type: 'success'
			});
		},
		setUser: function(state, payload) {
			if(payload.admin) {
				state.loginUsers = payload;
			}else {
				state.loginUsers[payload.type].push(payload);
			}
		},
		setLogin: function(state, payload) {
			state.isLogin = payload;
		},
		setPwd: function(state, payload) {
			state.loginUsers[payload.adminType][payload.index].password = payload.newPwd;
		},
	},
	actions: {
		addToCart: function(context, payload) {
			context.commit('addToCart', payload);
		},
		removeToCart: function(context, payload) {
			context.commit('removeToCart', payload);
		},
		setUser: function(context, payload) {
			context.commit('setUser', payload);
		},
		setLogin: function(context, payload) {
			context.commit('setLogin', payload);
		},
		setPwd: function(context, payload) {
			context.commit('setPwd', payload);
		}
	},
	getters: {
	    getCarts(state) {
	      return state.carts;
	    },
	    getUsers(state) {
	    	return state.loginUsers;
	    },
	    getLogin(state) {
	    	return state.isLogin;
	    }
	}
});
