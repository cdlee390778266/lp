import Vue from 'vue';
import Vuex from 'vuex';
import { Message } from 'element-ui';

Vue.use(Vuex);

// 不建议线上使用
const debug = process.env.NODE_ENV !== 'production';

/**
 * export一个store的单例
 */

export default new Vuex.Store({
	state: {
		login: false,
		carts: []
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
		}
	},
	actions: {
		addToCart: function(context, payload) {
			context.commit('addToCart', payload);
		},
		removeToCart: function(context, payload) {
			context.commit('removeToCart', payload);
		}
	},
	getters: {
	    getCarts: state => {
	      return state.carts;
	    }
	}
});
